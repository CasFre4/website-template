import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

interface User {
  email: string;
  password: string;
}

const users: User[] = [];
const JWT_SECRET = 'your_secret_key';

// Register
app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const hashed = await bcrypt.hash(password, 10);
  users.push({ email, password: hashed });
  res.status(201).send({ message: 'User registered' });
});

// Login
app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).send({ error: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send({ error: 'Invalid password' });

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ message: 'Login successful', token });
});

// Protected route
app.get('/profile', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ error: 'Missing token' });

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    res.send({ message: 'Welcome', email: decoded.email });
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

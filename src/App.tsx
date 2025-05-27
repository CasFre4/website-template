
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Login';
import Schedule from './pages/Register';
import Navbar from './components/Navbar'
import './css/global.css'
import projectList from './assets/ProjectList'

function App() {
  const location = useLocation()
  const hideNavbarPath = ['/login', '/register']
  const shouldHideNavbar = hideNavbarPath.includes(location.pathname)
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        {projectList.map((project, index) => (
          <Route key={index} path={`/${project.title.toLowerCase().replace(/\s+/g, '-')}`} element={<p>Hello World</p>} />
        ))}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path='/aboutus' element={<Schedule />}></Route>
      </Routes>
      
    </>
  );
}

export default App



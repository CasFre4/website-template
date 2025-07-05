
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar'
import './css/global.css'
import projectList from './data/projects.json'
import ContactMe from './pages/ContactMe';
function App() {

  const location = useLocation()
  const hideNavbarPath = ['/login', '/register']
  const shouldHideNavbar = hideNavbarPath.includes(location.pathname)
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        {projectList.map((project, index) => (
          project.title &&
          project.summary &&
          project.features &&
          project.image &&
          project.link &&
          project.skills.length > 0 &&
          project.projectType && (
          <Route key={index} path={`/${project.title.toLowerCase().replace(/\s+/g, '-')}`} element={<p>Hello World</p>} />
        )))}
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        {/* <Route  path='/aboutus' element={<Schedule />}></Route> */}
      </Routes>
      
    </>
  );
}

export default App



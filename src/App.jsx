import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';


function Projects() {
  return <h1>Projects Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

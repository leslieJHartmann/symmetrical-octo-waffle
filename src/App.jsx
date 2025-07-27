import { Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import ArtandIllustation from './pages/ArtandIllustration.jsx';
import Home from './pages/Home.jsx';




export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/artandillustration">Art & Illustration</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artandillustration" element={<ArtandIllustation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

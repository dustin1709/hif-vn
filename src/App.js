import About from './About';
import './App.css';
import Business from './Business';
import Careers from './Careers';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './Contact';
import Home from './Home';

import { Route, Routes } from 'react-router-dom';
import Swift from './Swift';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/bank" element={<Swift />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
      <About />
      <Business />
      <Careers />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

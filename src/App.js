import About from './About';
import './App.css';
import Business from './Business';
import Careers from './Careers';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './Contact';
import Home from './Home';

function App() {
  function onCopyHandler(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className="App" onCopy={onCopyHandler}>
      <Navbar />
      <Home />
      <About />
      <Business />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

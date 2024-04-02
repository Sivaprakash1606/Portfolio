import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import './index.css';
function App() {

  return (
    <>
      <div className="">
        <NavBar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        
      </div>
    </>
  );
}

export default App

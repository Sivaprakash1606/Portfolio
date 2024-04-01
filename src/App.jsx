import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import './index.css';
function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Portfolio/>
        <Experience/>
        
      </div>
    </>
  );
}

export default App

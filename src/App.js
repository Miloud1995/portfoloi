import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";




function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <ContactMe/>
      
   
      <SocialLinks/>
      
    </div>
  );
}

export default App;

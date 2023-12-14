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
      <section><NavBar /></section>
      <section><Home /></section>
      <section><About /></section>
      <section><Portfolio /></section>
      <section><Experience /></section>
      <section><ContactMe/></section>
      
   
      <SocialLinks/>
      
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import  Navbar from "./components/pages/Navbar.js";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import RequestDemoForm from "./components/pages/RequestDemoForm";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
// This is the function that allows for the menu item to scroll to the section "id" of the "Home.js" Component, This function is then passed through the "Navbar" component and passed into the onClick event.
   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<Home scrollToSection={scrollToSection}/>} />
        <Route path="/request" element={<RequestDemoForm />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Portfolio from "./Portfolio";
import Freelance from "./Freelance";

function App() {

  return (
      <>
        <Navbar/>
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/portfolio" element={<Portfolio />}/>
                  <Route path="/freelance" element={<Freelance />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/contact" element={<Contact />}/>
              </Routes>
          </div>
      </>

  );
}

export default App;

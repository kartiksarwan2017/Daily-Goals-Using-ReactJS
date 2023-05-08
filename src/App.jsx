import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  return (
    /* Her we should give the components that need to be render everytime outside the Routes Wrapper Component i.e Header will be render on every page 
    */
    <Router>
      <Header />

      {/* /user/abcdefghijklmnopqrstuvwxyz 
          /user/sdfgfhjhjj
          
          Here both the routes are same

          /user/:id  Here are the user whatever is written as params is considered as id
      */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user/sad" element={<Contact />} />
        <Route path="/user/sadsdd" element={<Contact />} /> */}
        <Route path="/user/:id" element={<User />} />
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

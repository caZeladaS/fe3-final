import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className={theme}>
        <nav>
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <li>
              <a href="/contact">CONTACTO</a>
            </li>
            <li>
              <a href="/detail">PROFESIONALES</a>
            </li>
            <li>
              <a href="/favs">FAVORITOS</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </Router>
  );
};

const NotFound = () => {
  return <h2>404 - Not Found</h2>;
};

export default Navbar;
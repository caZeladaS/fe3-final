import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import './App.css';
import {CombinedContextProvider}  from './Context';

function App() {
  return (
      <div className="App">
        <CombinedContextProvider >
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={ <h1>Ruta no encontrada...  </h1> }/> 
          </Routes>
          <Footer/>
        </CombinedContextProvider>
      </div>
  );
}

export default App;


import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home     from './pages/Home/Home'
import NavBar   from './Components/NavBar/NavBar';
import Header   from './Components/Header/Header';
import About    from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact  from './pages/Contact/Contact';
import Footer   from './Components/Footer/Footer';

function App() {
    return (
        <Router>
            <div>

                <Header/>
                
                <NavBar/>

                <Routes>
                    <Route path="/" element={<Home/>}  />
                    <Route path="About" element={<About/>} />
                    <Route path="Projects" element={<Projects/>} />
                    <Route path="Contact" element={<Contact/>} />


                </Routes>

                <Footer/>
                
            </div>
        </Router>




    );


}

export default App;

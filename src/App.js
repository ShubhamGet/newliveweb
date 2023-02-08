import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'
import Navbar from './Components/Navbar'

import {
    BrowserRouter as Router,
    Route, Routes, Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            < Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route exact path='/about' element={< About />} />
                    <Route exact path='/contact' element={< Contact />} />
                    <Route exact path='/service' element={< Service />} />

                </Routes>
            </Router>
        </>
    )
}

export default App

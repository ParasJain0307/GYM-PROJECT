import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

//Customized Components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import BMICalculator from "./components/BMICalculator"
import WorkoutSessions from "./components/WorkoutSessions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (<Router>
    <NavBar />
    <Hero />
    <WorkoutSessions />
    <Gallery />
    <Pricing />
    <Contact />
    <BMICalculator />
    <Footer />
    <ToastContainer theme='dark' position='top-center' />
  </Router>)
}

export default App
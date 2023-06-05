import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

/*
export const App=()=>{
  return(
    <div>App</div>
  )
}
*/
function App() {
    return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
    );
    }

export default App // we should always export the component as default
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollAnimation from './components/ScrollAnimation';

const App = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <ScrollAnimation animation="fade-up">
                <Home />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={0.2}>
                <About />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={0.2}>
                <Skills />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={0.2}>
                <Projects />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={0.2}>
                <Contact />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={0.2}>
                <Footer />
            </ScrollAnimation>
            <BackToTop />
        </div>
    );
};

export default App; 
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
    return (
        <div id="home" className="section-padding min-h-screen flex items-center">
            <div className="container-custom">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="name-font text-gradient-animate name-entrance">Bommireddy Abhinav Kumar</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-textSecondary entrance-animation-delay-1">
                        Front-End Developer
                    </p>
                    <div className="flex justify-center gap-4 mt-8 entrance-animation-delay-2">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-md hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="mt-12 entrance-animation-delay-3">
                        <a
                            href="#about"
                            className="inline-block animate-bounce"
                        >
                            <FaArrowDown className="text-3xl text-secondary" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 
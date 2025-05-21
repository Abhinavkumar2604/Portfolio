import React from 'react';
import damImage from '../assets/dam.jpg';

const About = () => {
    const personalInfo = {
        name: "Bommireddy Abhinav Kumar",
        email: "bommireddyabhinavkumar@gmail.com",
        phone: "+91 8428664130",
        dob: "26th June 2004",
        location: "Kadapa, Andhra Pradesh, India - 516002",
        github: "github.com/Abhinavkumar2604",
        linkedin: "linkedin.com/in/abhinav2604"
    };

    return (
        <div id="about" className="section-padding min-h-screen flex items-center">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-animate entrance-animation">
                    About <span className="text-secondary">Me</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 lg:order-1 entrance-animation-delay-1">
                        <div className="glass p-6 rounded-lg shadow-hover hover:shadow-glow transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-gradient-animate">Profile Summary</h3>
                            <p className="text-textSecondary">
                                I am a passionate Front-End Developer with a strong foundation in web technologies.
                                My journey in web development started with a curiosity about how websites work,
                                which led me to dive deep into modern web technologies and best practices.
                            </p>
                        </div>

                        <div className="glass p-6 rounded-lg shadow-hover hover:shadow-glow transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-gradient-animate">Personal Information</h3>
                            <div className="space-y-2 text-textSecondary">
                                <p><span className="text-secondary">Name:</span> {personalInfo.name}</p>
                                <p><span className="text-secondary">Email:</span> {personalInfo.email}</p>
                                <p><span className="text-secondary">Phone:</span> {personalInfo.phone}</p>
                                <p><span className="text-secondary">Date of Birth:</span> {personalInfo.dob}</p>
                                <p><span className="text-secondary">Location:</span> {personalInfo.location}</p>
                                <p>
                                    <span className="text-secondary">GitHub:</span>{' '}
                                    <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                                        {personalInfo.github}
                                    </a>
                                </p>
                                <p>
                                    <span className="text-secondary">LinkedIn:</span>{' '}
                                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                                        {personalInfo.linkedin}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 entrance-animation-delay-2">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-lg">
                                <img
                                    src={damImage}
                                    alt="Bommireddy Abhinav Kumar"
                                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-sm font-medium">Front-End Developer</p>
                                    <p className="text-xs opacity-75">Passionate about creating beautiful web experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 
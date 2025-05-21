import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-tertiary/50 backdrop-blur-sm border-t border-secondary/20 py-8">
            <div className="container-custom">
                <div className="flex flex-col items-center space-y-6">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/abhinav._.04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textSecondary hover:text-secondary transition-colors duration-300"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/abhinav._.04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textSecondary hover:text-secondary transition-colors duration-300"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com/abhinav._.04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textSecondary hover:text-secondary transition-colors duration-300"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-textSecondary text-center">
                        <p>© {currentYear} Bommireddy Abhinav Kumar. All rights reserved.</p>
                        <p className="mt-2 text-sm">Designed and built with ❤️</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex space-x-6 text-sm">
                        <a href="#home" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                            About
                        </a>
                        <a href="#projects" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-textSecondary hover:text-secondary transition-colors duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
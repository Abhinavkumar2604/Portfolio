import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "ECG Signal Processing using IoT Technology",
            description: "ECG signal analysis using sensors, ESP-32, and Arduino. LSTM network used for classification into normal/abnormal signals.",
            technologies: ["IoT", "Arduino", "Python", "ML"],
            githubLink: "abhinav._portfolio"
        },
        {
            title: "Personal Portfolio",
            description: "Portfolio website built using HTML, CSS, and JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "abhinav._portfolio"
        }
    ];

    return (
        <div id="projects" className="section-padding">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-animate entrance-animation">
                    My <span className="text-secondary">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-lg shadow-hover hover:shadow-glow transition-all duration-300 project-card-animation"
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gradient-animate">
                                {project.title}
                            </h3>
                            <p className="text-textSecondary mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-accent-light text-secondary rounded-full text-sm hover-tilt"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.githubLink && (
                                <a
                                    href={`https://github.com/${project.githubLink}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary btn-shine btn-glow inline-block hover-tilt"
                                >
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects; 
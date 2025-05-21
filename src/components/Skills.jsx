import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 85, color: "accent1" },
                { name: "C++", level: 75, color: "accent2" },
                { name: "HTML", level: 90, color: "accent3" },
                { name: "CSS", level: 85, color: "accent4" },
                { name: "JavaScript", level: 80, color: "accent5" },
                { name: "ReactJS", level: 70, color: "accent6" }
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Team Player" },
                { name: "Communication" },
                { name: "Time Management" },
                { name: "Adaptability" },
                { name: "Problem Solving" }
            ],
        },
        {
            title: "Developer Tools",
            skills: [
                { name: "GitHub" },
                { name: "VS Code" }
            ],
        },
        {
            title: "Languages",
            skills: [
                { name: "Telugu" },
                { name: "Hindi" },
                { name: "English" },
                { name: "Tamil" }
            ],
        }
    ];

    const hobbies = [
        "Reading",
        "Gaming",
        "Sports (Cricket & Kabaddi)",
        "Cooking",
        "Leet Coder (Beginner)"
    ];

    const interests = [
        "Web Development",
        "IoT (Internet of Things)",
        "Machine Learning",
        "Cloud Computing"
    ];

    return (
        <div id="skills" className="section-padding bg-gradient-to-b from-gradientStart to-gradientEnd">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-animate entrance-animation">
                    My <span className="text-secondary">Skills</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Programming Languages with Progress Bars */}
                    <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow">
                        <h3 className="text-xl font-semibold mb-6 text-secondary">
                            Programming Languages
                        </h3>
                        <div className="space-y-4">
                            {skillCategories[0].skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2 entrance-animation-delay-1" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-medium text-textSecondary">{skill.name}</span>
                                        <span className="text-secondary">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-secondary rounded-full skill-bar-animation"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div className="space-y-6">
                        {skillCategories.slice(1).map((category, index) => (
                            <div
                                key={index}
                                className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-secondary">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hobbies and Interests Section */}
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                    {/* Hobbies */}
                    <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow">
                        <h3 className="text-xl font-semibold mb-4 text-secondary">
                            Hobbies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {hobbies.map((hobby, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow">
                        <h3 className="text-xl font-semibold mb-4 text-secondary">
                            Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {interests.map((interest, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills; 
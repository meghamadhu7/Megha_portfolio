import React, { useEffect } from 'react';

const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "75%" },
    { name: "Photoshop", level: "70%" }
];

const Skills = () => {
    useEffect(() => {
        // Animation code for filling progress bars
        document.querySelectorAll('.progress-fill').forEach((fill, index) => {
            fill.style.width = skills[index].level;
        });
    }, []);

    return (
        <section className="skills">
            <h2>Skills</h2>
            <p>Here are some of my professional skills.</p>
            <div className="skills-list">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <div className="skill-name">{skill.name}</div>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

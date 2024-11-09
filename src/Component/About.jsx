// AboutMe.js
import React from 'react';


const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-content">
                
                
            </div>
            <h1>Skills</h1>
            <h5>Here are some of my professional skills</h5>

            <div className="skills-section">
                <div className="skill">
                    <span>HTML & CSS</span>
                    <div className="progress-bar"><div style={{ width: '85%' }}></div></div>
                    <span className="percentage">85%</span>
                </div>
                <div className="skill">
                    <span>Python</span>
                    <div className="progress-bar"><div style={{ width: '70%' }}></div></div>
                    <span className="percentage">70%</span>
                </div>
                <div className="skill">
                    <span>JavaScript</span>
                    <div className="progress-bar"><div style={{ width: '98%' }}></div></div>
                    <span className="percentage">98%</span>
                </div>
                <div className="skill">
                    <span>Figma</span>
                    <div className="progress-bar"><div style={{ width: '91%' }}></div></div>
                    <span className="percentage">91%</span>
                </div>
            </div>

            <div className="crafted-designs">
               
                <div className="design-icons">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-vuejs"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-python"></i>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

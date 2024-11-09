import React from 'react'

import {Container,Col,Row} from 'react-bootstrap';
import projectimg1 from '../Asserts/images/projectimg1.png';
import projectimg2 from '../Asserts/images/projectimg2.png';
import projectimg3 from '../Asserts/images/projectimg3.png';

function Projects() {
    const Projects =[
        {
            title:" Restaurant",
            description: "Design & Development",
            imgUrl:projectimg1,
        },
        {
            title:" Restaur",
            description: "Design & Development",
            imgUrl:projectimg2,
        },
        {
            title:"Spice ",
            description: "Design & Development",
            imgUrl:projectimg3,
        },

    ];
  return (

    <section className="project" id="projects">
        <Container className='project-bx'>
         <h2>Projects</h2>
          <p className='project-descripition'>To leverage my expertise in HTML, CSS, and JavaScript alongside my proficiency in modern frontend frameworks to create engaging and intuitive user experiences. Seeking opportunities to contribute to innovative projects while continually expanding my skill set and staying of industry trends.</p>
            <Row>
                <Col className='project-list'>
                    <a href="#"  className='proj'><img src={projectimg1} alt="Broken Image" width={'320px'} height={'200px'}/><h5>Godaddy</h5></a>
              
               
              
                    <a href="#" className='proj'><img src={projectimg2} alt="Broken Image" width={'320px'} height={'200px'}/><h5>PortMirror</h5></a>
                   

                
              
                    <a href="#" className='proj'><img src={projectimg3} alt="Broken Image" width={'320px'} height={'200px'}/>Portfoli</a>
                   

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects
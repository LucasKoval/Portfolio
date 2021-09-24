import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper" style={{ padding: '0' }}>
            <table style={{ display: 'flex', justifyContent: 'space-around' }}>
              <tr
                className="contact-wrapper__text"
                style={{ display: 'flex', flexFlow: 'column', marginBottom: '1rem' }}
              >
                <td>JavaScript | ES6+</td>
                <td>HTML | EJS | JSX</td>
                <td>CSS | Styled-Components </td>
                <td>Bootstrap | Material-UI </td>
              </tr>
              <tr
                className="contact-wrapper__text"
                style={{ display: 'flex', flexFlow: 'column', marginBottom: '1rem' }}
              >
                <td>ReactJS</td>
                <td>NextJS</td>
                <td>Responsive Design</td>
                <td>MVC Architecture</td>
              </tr>
            </table>
          </div>
        </Fade>
      </Container>

      <Container style={{ marginBottom: '10rem' }}>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper" style={{ padding: '0' }}>
            <table style={{ display: 'flex', justifyContent: 'space-around' }}>
              <tr
                className="contact-wrapper__text"
                style={{ display: 'flex', flexFlow: 'column', marginBottom: '1rem' }}
              >
                <td>NodeJS</td>
                <td>ExpressJS</td>
                <td>JestJS</td>
                <td>MySQL | Sequelize</td>
                <td>REST APIs | GraphQL APIs</td>
              </tr>
              <tr
                className="contact-wrapper__text"
                style={{ display: 'flex', flexFlow: 'column', marginBottom: '1rem' }}
              >
                <td>Postman</td>
                <td>Git | GitHub</td>
                <td>Trello | Jira</td>
                <td>Slack | MS Teams</td>
                <td>Agile Methodologies - Scrum</td>
              </tr>
            </table>
          </div>
          <div className="contact-wrapper">
            <table style={{ display: 'flex', justifyContent: 'center' }}>
              <tr className="contact-wrapper__text" style={{ display: 'flex', flexFlow: 'column' }}>
                <td>Teamwork</td>
                <td>Communication</td>
                <td>Leadership</td>
                <td>Problem Solving</td>
                <td>Organization</td>
              </tr>
            </table>
          </div>
        </Fade>
      </Container>

      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

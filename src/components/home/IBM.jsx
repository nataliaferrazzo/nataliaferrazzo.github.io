import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useHistory } from "react-router-dom";


export const Item = () => {
  let history = useHistory();
  return (
    <>
      <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
      <button type="button" class="btn btn-outline-light m-3 position-fixed" id="right-panel-link" onClick={() => history.goBack()}><i class='fas fa-angle-left'></i></button>
    </>
  );
};

const IBM = ({ image }) => {
  return (
    <div id="IBM" className="jumbotron jumbotron-fluid pt-5">
      <div class="position-absolute fixed-top">
        <Item />
      </div>
      <img src={image} alt="logo" className="mx-auto d-block img-fluid m-5" width={200} />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(60, 120, 245)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(60, 120, 245)' }}
          date="July 2022 - present"
          iconStyle={{ background: 'rgb(60, 120, 245)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Application Developer - Associate</h3>
          <p>
              Technical Specialists in this Job Role have expertise in translating IT requirements in the design, development, and assembly of components to create custom information systems. Typical examples of the deliverables are functional and technical designs, models, components, code, unit tests, and documentation.
          </p>            
          <br/>
          <h5 className="vertical-timeline-element-title">Technologies:</h5>
          <p>
            <ul>
              <li>JAVA</li>
              <li>Mock testing</li>
              <li>Microservices</li>
              <li>AWS Cloud</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2022 - July 2022"
          dateClassName="text"
          iconStyle={{ background: 'rgb(60, 120, 245)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Data Engineer - Early Associate</h3>
          <p>
            <ul>
              <li>Help with ETL jobs, checking and producing evidence of correct ETL job flow,</li>
              <li>Work with SQL queries to check if the final data are being correctly generated,</li>
              <li>Support data analysts, data scientists and data engineers.</li>
            </ul>
          </p>
          <h5 className="vertical-timeline-element-title">Technologies:</h5>
          <p>
            <ul>
              <li>Microsoft SQL Server</li>
              <li>PuTTY</li>
              <li>FileZilla</li>
              <li>JETL</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - Feb 2022"
          dateClassName="text"
          iconStyle={{ background: 'rgb(60, 120, 245)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Q&A - Early Associate</h3>
          <p>
            <ul>
              <li>Development and debug of e2e tests for AI chatbot to check conversation flow,</li>
              <li>Backend development using Node.js,</li>
              <li>Perform some tasks on Watson Studio,</li>
              <li>Set up API in Postman,</li>
              <li>Support developers.</li>
            </ul>
          </p>
          <h5 className="vertical-timeline-element-title">Technologies:</h5>
          <p>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Postman</li>
              <li>Watson Studio</li>
              <li>Docker</li>
              <li>GitHub</li>
              <li>MongoDB</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Start: August 8th, 2021"
          dateClassName="text"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div >
  );
};

export default IBM;

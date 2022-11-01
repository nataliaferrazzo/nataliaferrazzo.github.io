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
      <img src={image} alt="logo" className="mx-auto d-block img-fluid m-5" width={200}/>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Feb 2022 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
          <p>
            <ul>
              <li>Help with ETL jobs</li>
              <li>Check and produce evidence of correct ETL jobflow</li>
              <li>Do some SQL queries to check if the final data are being correctly generated.</li>
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Developer Intern</h3>
          <p>
            <ul>
              <li>Development and debugging of e2e tests for AI chatbot,</li>
              <li>Check AI chatbot conversation flow,</li>
              <li>Backend development using Node.js,</li>
              <li>Some tasks on Watson Studio,</li>
              <li>Configuration of API in Postman.</li>
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

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


const CAD = ({ image }) => {
  return (
    <div id="CAD" className="jumbotron jumbotron-fluid pt-5">
      <div class="position-relative fixed-top">
        <Item />
      </div>
      <img src={image} alt="logo" className="mx-auto d-block img-fluid m-5" width={200} />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(253 138 56)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(253 138 56)' }}
          date="Nov 2020 - August 6th, 2021"
          iconStyle={{ background: 'rgb(253 138 56)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Assistant Data Scientist</h3>
          <p>
            <ul>
              <li>Develop myself to assist in data gathering and data analysis from distinct tools for result measurament,</li>
              <li>Help with insights of new marketing strategies and goals,</li>
              <li>Draft daily result reports,</li>
              <li>Research about data analysis and data visualization,</li>
              <li>Apply machine learning models to forecast sales,</li>
              <li>Cluster customers so CRM can personalize communication with them,</li>
              <li>Together with the team, a tool to verify the legitimacy of affiliate assignment sales was created,</li>
              <li>Cross selling strategy implemented to a travel company,</li>
              <li>Support data scientists.</li>
            </ul>
          </p>
          <h5 className="vertical-timeline-element-title">Technologies:</h5>
          <p>
            <ul>
              <li>Python,</li>
              <li>Python labraries: Pandas, Numpy, Matplotlib, Seaborn, Prophet (Facebook), Selenium;</li>
              <li>Google Analytics,</li>
              <li>Pentaho</li>
              <li>Hadoop</li>
              <li>Power BI</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Start: November 20th, 2020"
          dateClassName="text"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div >
  );
};

export default CAD;

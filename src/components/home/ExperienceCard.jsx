import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
    return (
        <Col>
            <Card id="card" className="card shadow p-4 mb-5 rounded text-white">
                <div className="p-2 text-center">
                    <a class="card-block stretched-link text-decoration-none" href={process.env.PUBLIC_URL + '#' + data.url}>
                        <img className="bg-black mb-2" id='companylogo' src={data.companylogo} alt="" height={150} />
                    </a>
                    <p className="lead">
                        {data.role}
                        <br />
                        <h6>{data.date}</h6>
                    </p>

                </div>
            </Card>
        </Col>
    );
}

export default ExperienceCard;
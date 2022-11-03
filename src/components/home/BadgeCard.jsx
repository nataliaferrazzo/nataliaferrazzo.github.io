import React from 'react';

import {
    Col
} from "react-bootstrap";

const BadgeCard = ({ data }) => {
    return (
        <Col lg="3" md="3" sm="4s">
            <div className="pb-3 text-center">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <img
                        className="bg-transparent mb-1"
                        src={data.logo}
                        alt=""
                        width="100"
                        height="100"
                    />
                </a>
                <p className="lead">
                    <h5>{data.heading}</h5>
                    <br />
                </p>
            </div>
        </Col>
    );
}

export default BadgeCard;
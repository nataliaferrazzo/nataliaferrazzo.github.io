import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardImg } from "react-bootstrap";


const AcademicCard = ({ data }) => {
  const {
    title,
    message,
    paper,
    subject,
    image
  } = data

  return (
    <Col md={4}>
      <Card id="card" className="card shadow p-3 mb-5 rounded text-white justify-content-center align-items-center">
        <a class="card-block stretched-link text-decoration-none" href={paper} target=" _blank" 
                  rel="noreferrer noopener" className="btn">
          <CardImg src={image} />
        <Card.Body>
          <Card.Title className="text-white" as="h5">{title}</Card.Title>
          <Card.Text className="text text-justify">{message} </Card.Text>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <span className="badge badge-dark">{subject}</span>
            </span>
          </p>
        </Card.Body>
        </a>
      </Card>
    </Col>
  );
};



export default AcademicCard;

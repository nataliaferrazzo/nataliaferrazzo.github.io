import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import AcademicCard from "./AcademicCard";

const Academic = ({ heading, data, message }) => {
  return (
    <Jumbotron fluid id="academics" className="bg-transparent">
      <Container className="pt-4">
        <h2 className="display-6 pb-3 pt-5 text-right text-title category border border-top-0 border-right-0 border-left-0 border-secondary mb-5">{heading}</h2>
        <Row>
          {
            data.map(data => {
              return <AcademicCard key={data.title} data={data} />
            })
          }
        </Row>
        <h6 className="display-9 text"> {message} </h6>
      </Container>
    </Jumbotron>
  );
};

export default Academic;

import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({ experiences }) => {
    return (
        <section className="section bg-transparent">
            <Container className="pt-5">
                <Jumbotron fluid className="bg-black bgstyle">
                    <h2 className="display-6 pb-3 text-right text-title category border border-top-0 border-right-0 border-left-0 border-secondary">
                        {experiences.heading}
                    </h2>
                    <Row className="text pt-5">
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}

export default Experience;
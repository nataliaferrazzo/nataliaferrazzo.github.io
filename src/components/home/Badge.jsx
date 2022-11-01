import React from 'react';
import BadgeCard from "./BadgeCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Badge = ({badges}) => {
    return (  
        <section className="section bg-transparent">
            <Container>
                <Jumbotron fluid className="bg-black p-1">
                    <h2 className="display-6 pb-3 text-right text-title category border border-top-0 border-right-0 border-left-0 border-secondary">
                        {badges.heading}
                    </h2>

                    <Row className="text pt-5">
                        {
                            badges.data.map(data => {
                                return <BadgeCard key={data.name} data={data} />
                            })
                        }
                    </Row>

                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Badge;
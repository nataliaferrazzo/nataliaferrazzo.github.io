import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%"
        }}
        className="title bg-transparent bgstyle text-light max-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div className="static-gradient">
        <div id="stars"></div>
        <Container className="text-center mt-5">
          <div id="empty"></div>
          <h1 ref={ref} className="display-3">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons m-1`} />
              </a>
            ))}
          </div>
{/*        <a
            className="btn btn-outline-light btn-lg "
            href="aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
            </a> */}
        </Container>
        </div>
      </Jumbotron>
    );
  }
);

export default MainBody;

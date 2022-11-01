import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center bg-transparent">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
            Project highly inspired in {" "} template version made by 
            <a
              className="badge badge-white"
              rel="noopener"
              href="https://github.com/hashirshoaeb"
              aria-label="GitHub"
            >          Hashir Shoaib
            </a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

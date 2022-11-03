import React from "react";
//import { Link } from "react-router-dom";
//import { useScrollPosition } from "../hooks/useScrollPosition";
//import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  //const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  return (
    <Navbar
      variant="dark"
      ref={navbarMenuRef}
      className={` fixed-top  ${ "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/"}>
        {`👩🏻‍💻`}


      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-light">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}
          {repos.show && (
            <Nav.Link
              className="nav-link lead text-light"
              href={process.env.PUBLIC_URL + "/#/projects"}
            >
              Projects
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className="nav-link lead text-light"
              href={process.env.PUBLIC_URL + "/#/experience"}
            >
              Experience
            </Nav.Link>
          )}
          {about.show && (
            <Nav.Link
              className="nav-link lead text-light"
              href={process.env.PUBLIC_URL + "/#/aboutme"}
            >
              About
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;

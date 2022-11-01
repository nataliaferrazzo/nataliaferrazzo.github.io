import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  academic,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  badges,
  ibm,
  cadastra
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
//import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Badge from "./components/home/Badge.jsx";
import Academic from "./components/home/Academic.jsx";
import IBM from "./components/home/IBM.jsx";
import CAD from "./components/home/CAD.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
      />
    </>
  );
});

const About = React.forwardRef((props, ref) => {
  return (
    <>
      {
        about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}
      {getInTouch.show && (
        <GetInTouch
          heading={getInTouch.heading}
          message={getInTouch.message}
          email={getInTouch.email}
        />
      )}
    </>
  );
});


const Exp = React.forwardRef((props, ref) => {
  return (
    <>
      {experiences.show && (
        <Experience experiences={experiences} />
      )
      }
      {badges.show && (
        <Badge badges={badges} />
      )
      }
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
});

const Proj = React.forwardRef((props, ref) => {
  return (
    <>
      {academic.show && (
        <Academic
          heading={academic.heading}
          data={academic.data}
          message={academic.message}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          imag={repos.img}
          message={repos.message}
        />
      )}
    </>
  );
});

const Ibm = React.forwardRef((props, ref) => {
  return (
    <>
      {ibm.show && (
        <IBM
          heading={ibm.heading}
          image={ibm.image}
        />
      )}
    </>
  );
});

const Cadastra = React.forwardRef((props, ref) => {
  return (
    <>
      {cadastra.show && (
        <CAD
          heading={cadastra.heading}
          image={cadastra.image}
        />
      )}
    </>
  );
})

/*const Cont = React.forwardRef((props, ref) => {
  return (
    <>
      {getInTouch.show && (
        <GetInTouch
          heading={getInTouch.heading}
          message={getInTouch.message}
          email={getInTouch.email}
        />
      )}
    </>
  );
});*/

const App = () => {
  const titleRef = React.useRef();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Switch>
        <Route path="/" exact component={() => <Home ref={titleRef} />} />
        <Route path="/aboutme" exact component={() => <About />} />
        <Route path="/experience" exact component={() => <Exp ref={titleRef} />} />
        <Route path="/projects" exact component={() => <Proj />} />
        <Route path="/experience/IBM" exact component={() => <Ibm />} />
        <Route path="/experience/cadastra" exact component={() => <Cadastra />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

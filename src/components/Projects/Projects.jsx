import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import busbooker from "../../Assets/Projects/busbooker.png";
// import iosd from "../../Assets/Projects/iosd.png";
// import chat from "../../Assets/Projects/chat.png";
// import mart from "../../Assets/Projects/5mart.png";
// import codeeditor from "../../Assets/Projects/codeeditor.png";
// import cuckoo from "../../Assets/Projects/cuckoo.png";
// import eatfit from "../../Assets/Projects/eatfit.png";
// import geekguru from "../../Assets/Projects/geekguru.png";
// import grubhub from "../../Assets/Projects/grubhub.png";
// import projectlist from "../../Assets/Projects/techproject.png";
// import placement from "../../Assets/Projects/placement.png";
// import indchat from "../../Assets/Projects/indchat.png";
// import impulse from "../../Assets/Projects/impulse.png";
// import gallery from "../../Assets/Projects/gallery.png";
// import film from "../../Assets/Projects/film.png";
// import snip from "../../Assets/Projects/snip.png";
// import foodie from "../../Assets/Projects/foodie.png";
// import gana from "../../Assets/Projects/gana.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indchat}
              isBlog={false}
              title="IndChat"
              description="Welcome to INDchat, a dynamic and engaging real-time chat website built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Socket.io, Redux Toolkit, and Tailwind CSS. INDchat aims to provide a seamless and interactive chatting experience."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grubhub}
              isBlog={false}
              title="GrubHub"
              description="Welcome to Grub Hub, your ultimate online destination for ordering delicious food with ease. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with Stripe for secure payments."
              ghLink="https://github.com/Paramhans-Singh/GrubHub"
              demoLink="https://grub-hubs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectlist}
              isBlog={false}
              title="My Tech Project-List"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impulse}
              isBlog={false}
              title="Impulse"
              description="Impulse is the premier online platform for managing and showcasing college society events. It offers a comprehensive solution for students and organizers to discover, promote, and participate in a wide range of events, from academic seminars to cultural festivals."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuckoo}
              isBlog={false}
              title="Cybersecurity | DRDO"
              description="This project, sponsored by the Defense Research and Development Organization (DRDO), focuses on enhancing cybersecurity measures using Cuckoo Sandbox for malware analysis on an Ubuntu platform. Cuckoo Sandbox is an open-source automated malware analysis system."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatfit}
              isBlog={false}
              title="Eatfit"
              description="Welcome to Eat Fit, your ultimate online destination for ordering fast food with a healthy twist. Built using React Js, Eat Fit aims to provide a seamless and delightful food ordering experience. Whether you're craving burgers, pizzas, or salads, Eat Fit has got you covered!"
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-X"
              description="ChatX, a MERN stack chatting engine with Socket.io, provides real-time communication through React. Supported by Express.js and MongoDB, it ensures seamless and instant messaging experiences with dynamic updates and efficient data synchronization."
              ghLink="https://github.com/Paramhans-Singh/Chat-X"
              demoLink="https://github.com/Paramhans-Singh/Chat-X"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geekguru}
              isBlog={false}
              title="GeekGuru"
              description="Geek Gurus is an e-learning web application designed to provide users with access to a wide range of courses on various topics. Whether you're a beginner looking to learn a new skill or an expert seeking to deepen your knowledge"
              ghLink="https://github.com/Paramhans-Singh/Geek-Gurus"
              demoLink="https://geek-gurus.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busbooker}
              isBlog={false}
              title="BusBooker"
              description="BusBooker, a MERN stack bus booking app, employs React for a user-friendly interface. Driven by Express.js and MongoDB, it streamlines the booking process, offering users a seamless experience to find, reserve, and manage bus tickets."
              ghLink="https://github.com/Paramhans-Singh/BusBooker"
              demoLink="https://github.com/Paramhans-Singh/BusBooker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Hub"
              description="Placement Hub is a community platform designed to facilitate job alerts and preparation for aspiring professionals. This platform aims to bring together job seekers, recruiters, and industry experts to share insights, resources, and opportunities."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Gallery Ellite"
              description="Gallery Elite is a sleek and modern photo gallery website built with ReactJS. It offers a visually stunning platform for showcasing captivating images across various categories. With its intuitive user interface and smooth navigation."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snip}
              isBlog={false}
              title="Short Snip"
              description="Welcome to Short Snip, a sleek and efficient URL shortener built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project aims to provide a simple yet powerful tool to shorten long URLs, making them easier to share and manage."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iosd}
              isBlog={false}
              title="IOSD Website"
              description="Welcome to the IOSD website, a hub for innovation and collaboration in the world of software development! This platform, powered by cutting-edge technologies like React.js, Mantine Hooks, CSS, and JavaScript, is designed to provide an interactive and engaging user experience."
              ghLink="https://github.com/Paramhans-Singh/IOSD"
              demoLink="https://iosd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="FilmSafari"
              description="FilmSafari is a movie rendering website designed to provide users with an immersive cinematic experience. It serves as a platform for exploring and discovering movies, trailers, and reviews. Built with React Js, Tailwind CSS and JavaScript."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeeditor}
              isBlog={false}
              title="Code Canvas"
              description="This project is a JavaScript-based code editor built with HTML, CSS, and JavaScript. It provides functionalities for writing and editing code, and syntax highlighting. Designed for simplicity and efficiency."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mart}
              isBlog={false}
              title="5 Mart"
              description="About
              This project is an e-commerce website named 5Mart that offers a wide range of products for customers to browse and purchase. Built using HTML, CSS, and JavaScript, the site provides a user-friendly shopping experience."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie"
              description="This project is a food website named Foodie Food that showcases delicious recipes, food articles, and culinary tips. Built using HTML, CSS, JavaScript, and Tailwind CSS it provides an immersive experience for food enthusiasts."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gana}
              isBlog={false}
              title="Gaana Mart"
              description="This project is a music streaming website named GanaMart inspired by platforms like Spotify. It allows users to browse, stream, and manage music. Built using HTML, CSS, and JavaScript, the site provides an intuitive and engaging music listening experience."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

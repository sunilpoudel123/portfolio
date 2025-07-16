import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import creditcard from "../../Assets/Projects/creditcard2.jpg";
import frameworkbank from "../../Assets/Projects/frameworkbank.jpg";
import smartwallet from "../../Assets/Projects/smartwallet1.jpg";

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
              imgPath={smartwallet}
              isBlog={false}
              title="Smart Wallet"
              description="Designed and implemented a scalable Smart Wallet system using microservices architecture for modularity and maintainability. Integrated Kafka for event-driven asynchronous communication, enhancing responsiveness and reliability. Developed efficient MySQL data models and queries for robust transaction storage and retrieval."
              ghLink="https://github.com/sunilpoudel123/digital-wallet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frameworkbank}
              isBlog={false}
              title="Framework for Banking System (Academic Project)"
              description="Designed and implemented a banking system framework using Factory, Singleton, Adapter, and Command design patterns in Java. Enhanced with credit card system, account management, interest calculations, transaction notifications, and reporting capabilities."
              ghLink="https://github.com/sunilpoudel123/banking-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditcard}
              isBlog={false}
              title="Credit Card Fraud Transaction Detector (Academic Project)"
              description="Designed and implemented a fraud detection system using supervised machine learning on Kaggle credit card transaction data. Applied SMOTE, Decision Tree, Random Forest, ANN, Logistic Regression, and AdaBoost. Utilized Python, Pandas, Scikit-learn, and NumPy."
              ghLink="https://github.com/sunilpoudel123/credit-card-fraud-transaction-detector"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

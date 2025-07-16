import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
          strings: [
              "Java Backend Developer",
              "Technical Lead",
              "FinTech Specialist",
              "Spring Boot Expert",
              "Cloud Deployment",
              "Agile Methodologies",
              "REST API Developer",
              "DevOps Practitioner"
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

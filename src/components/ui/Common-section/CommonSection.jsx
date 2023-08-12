// -------------------------- React ---------------------------- //
import React from "react";

// ----------- reactstrap components --------------- //
import { Container } from "reactstrap";

// ----------- css file --------------- //
import "./common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;

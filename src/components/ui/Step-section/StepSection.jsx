import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Dive into the world of NFTs, where unique creativity meets blockchain. Discover, own, and trade rare digital assets like never before.",
  },

  {
    title: "Create your collection",
    desc: "Dive into the world of NFTs, where unique creativity meets blockchain. Discover, own, and trade rare digital assets like never before. ",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Dive into the world of NFTs, where unique creativity meets blockchain. Discover, own, and trade rare digital assets like never before.",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Dive into the world of NFTs, where unique creativity meets blockchain. Discover, own, and trade rare digital assets like never before. ",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;

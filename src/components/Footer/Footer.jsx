// -------------------------- React ---------------------------- //
import React from "react";

// ----------- reactstrap components --------------- //
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

// ----------- react-router-dom components --------------- //
import { Link } from "react-router-dom";

// ----------- css file --------------- //
import "./footer.css";

// ----------- Account Details --------------- //
const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

// ----------- Community Details --------------- //
const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

// ----------- Company Details --------------- //
const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>
              Dive into the world of NFTs, where unique creativity meets blockchain. Discover, own, and trade rare digital assets like never before.
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resources</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <Link to="#">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2023, Developed by Deepanshu Chawla.
              All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


// Notes
// How this page is made write every single step in detail ?
// 1. First of all we have to create a folder named Footer in components folder.
// 2. Then we have to create a file named Footer.jsx in Footer folder.
// 3. Then we have to import reactstrap components and react-router-dom components.
// 4. Then we have to create three different arrays for three different sections.
// 5. Then we have to create a functional component named Footer.
// 6. Then we have to return the footer section.
// 7. Then we have to create a container and inside the container we have to create a row.
// 8. Inside the row we have to create five different columns.
 
// What they do 
// 1. ) ListGroup ->  it is used to create a list group. 
// ListGroupItem  ->  it is used to create a list group item.
// d-flex -> it is used to make the element flex.
// gap-2 ->  it is used to give a gap of 2px between two elements.
// sm = "6" -> it is used to make the column 6 in small screen.
// mb-4 ? -> it is used to give a margin bottom of 4px.
// lg = "3"  -> it is used to make the column 3 in large screen.
// md = "6" -> it is used to make the column 6 in medium screen.

// what is md , lg , sm , mb ?
// md -> medium screen and (768px - 991px)
// lg -> large screen and (992px - 1199px)
// sm -> small screen and (576px - 767px)

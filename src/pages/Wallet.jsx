// -------------------------- React ---------------------------- //
import React from "react";

// ----------- Comman Section --------------- //
import CommonSection from "../components/ui/Common-section/CommonSection";

// ----------- Container , row , col  --------------- //
import { Container, Row, Col } from "reactstrap";

// -------------------------- CSS ---------------------------- //
import "../styles/wallet.css";

// ----------- Wallet Data --------------- //
// 1.) wallet title  
// 2.) wallet description
// 3.) wallet icon

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Safeguard and manage your Bitcoin with our secure wallet solution. Seamlessly send, receive, and monitor your BTC transactions.",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Link your Coinbase Wallet for easy access to your crypto holdings. Effortlessly manage and trade your assets directly from our platform.",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Integrate your MetaMask Wallet for seamless interaction with decentralized apps. Empower your digital journey with swift.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "Elevate your experience with Authereum Wallet integration. Enjoy convenient access and enhanced security for your transactions .",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
        {/* Comman Section */}
        <CommonSection title="Connect Wallet" />

        {/* Wallet Section */}
        <section>

        {/* Container */}
            <Container>
            {/* Row */}
            <Row>
                {/* Connect Wallet  */}
                <Col lg="12" className="mb-5 text-center">
                <div className="w-50 m-auto">
                    <h3 className="text-light">Connect your wallet</h3>
                    <p>
                    Connect your wallet to access a world of seamless cryptocurrency transactions and explore exciting decentralized applications.
                    </p>
                </div>
                </Col>

                {/* Wallets Options */}
                {wallet__data.map((item, index) => (
                <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                    <div className="wallet__item">
                    <span>
                        <i class={item.icon}></i>
                    </span>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                    </div>
                </Col>
                ))}
            </Row>
            </Container>
        </section>
    </>
  );
};

export default Wallet;

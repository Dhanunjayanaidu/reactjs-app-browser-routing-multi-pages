import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./../components/Header";

function Faqs() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "150px 50px" }}>
        <h1>Faqs content will be here</h1>
        <p>
          some paragraph will be here Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}

export default Faqs;

// FaqAccordion.jsx
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FaqAccordion = () => {
  return (
    <div className="upd-col">
      <div className="upd-top">
        <p>FAQ</p>
      
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div> How old do I have to be to take an online class?</div>
          </Accordion.Header>
          <Accordion.Body>Answer here</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How many classes can I take?</Accordion.Header>
          <Accordion.Body>Answer here</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How do I enroll and register?</Accordion.Header>
          <Accordion.Body>Answer here</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What if I change my mind and want to drop my class?
          </Accordion.Header>
          <Accordion.Body>Answer here</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How do I know if online training is right for me?
          </Accordion.Header>
          <Accordion.Body>Answer here</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;

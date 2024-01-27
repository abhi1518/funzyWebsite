import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FAQAccordion() {
  return (
    <div style={{ justifyContent: 'center' }}>
      <div className='mx-auto' style={{ width: "80%" }} id="main">
        <div style={{ textAlign: "center" }}>
          <h1>FAQ<span style={{ color: "#8546BD" }}>s</span></h1>
        </div>
        <Accordion>
          <Card className="mt-4">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <span className="title">What is Fantasy Sports?</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mt-3">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <span className="title">Is it safe to add money to Funzy11?</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Adding money to your Funzy11 account is both simple and safe. We have many different payment options enabled on Funzy11 to ensure that your personal details are safe with us. What's more? After you verify your personal details, you can withdraw the money that you win on Funzy11 directly to your bank account.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* Add more Card components for other FAQ items */}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQAccordion;

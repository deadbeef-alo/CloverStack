"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const gameEntries = [
  { 
    label: "Slot Machine",
    description: "Use your chips to try a spin."
  },
  {
    label: "Roulette",
    description: "Guess a combination and place a bet."
  },
  {
    label: "Scratch-off Ticket",
    description: "Buy a ticket and reveal the result."
  }
];

export default function SelectionMenu() {
  const msgSelect: string = "Please select a game.";
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Alert variant="secondary">
            {msgSelect}
          </Alert>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {gameEntries.map((entry, i) => (
          <Col className="text-center" lg="3" key={i}>
            <Card
              bg="success"
              text="white"
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>
                {entry.label}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {entry.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

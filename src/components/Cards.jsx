import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = ({ linkimg, titulo, descripcion }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={linkimg} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button variant="primary">imagen1</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

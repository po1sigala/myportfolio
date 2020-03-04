import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
function Cards(props) {
    return (
        <div>
            <Card className="fit" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.summary}</Card.Text>
                    <Button variant="primary">visit the app</Button>
                    <Button variant="primary">see the code</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Cards;

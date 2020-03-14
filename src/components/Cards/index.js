import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
function Cards(props) {
    return (
        <div>
            <Card className="fit" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.summary}</Card.Text>
                    <Button
                        target="_blank"
                        href={props.siteLink}
                        variant="primary"
                    >
                        visit the app
                    </Button>
                    <Button
                        target="_blank"
                        variant="primary"
                        href={props.codeLink}
                    >
                        see the code
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Cards;

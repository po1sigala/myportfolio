import React from "react";
import Cards from "../Cards";
import "./style.css";
import Row from "react-bootstrap/Row";
function Projects() {
    return (
        <div>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    title="ViewPoints"
                    summary=" Recreation of NEwsly providing full stack capability using React"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards title="hello" summary="summary"></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards title="placeholder" summary="tbd"></Cards>
            </Row>
        </div>
    );
}
export default Projects;

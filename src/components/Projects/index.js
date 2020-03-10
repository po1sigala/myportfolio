import React from "react";
import Cards from "../Cards";
import "./style.css";
import Row from "react-bootstrap/Row";
import image from "../../assets/images/newsly.JPG";
import algos, {
    bootstrap,
    codingvid,
    dunk,
    football,
    gify,
    goku,
    drawing,
    letters,
    liri,
    logos,
    newsly,
    psychic,
    statsdash,
    sqlstore
} from "../../assets/images/index";

function Projects() {
    return (
        <div>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    image={image}
                    title="ViewPoints"
                    summary=" Recreation of Newsly providing full stack capability using React"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards title="StatsIQ" image={dunk} summary="summary"></Cards>

                <Cards image={statsdash} title="StatsDash" summary=" "></Cards>
                <Cards image={""} title="Newsly" summary=" "></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards title="React Traffic Light" summary="tbd"></Cards>
                <Cards title="Company redesign" summary="tbd"></Cards>
                <Cards title="Charged Up" summary="tbd"></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards title="Gif that" summary="tbd"></Cards>
                <Cards title="Timed Trivia" summary="tbd"></Cards>
                <Cards title="memory game" summary="tbd"></Cards>
            </Row>
        </div>
    );
}
export default Projects;

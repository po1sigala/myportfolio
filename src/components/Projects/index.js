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
                    siteLink="https://spincheck.herokuapp.com/search"
                    codeLink="https://github.com/po1sigala/FinalSpin"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    title="StatsIQ"
                    image={dunk}
                    summary="summary"
                    siteLink="https://statsdashbb.herokuapp.com/"
                    codeLink="https://github.com/po1sigala/StatsDash"
                ></Cards>

                <Cards
                    image={statsdash}
                    title="StatsDash"
                    summary=" "
                    siteLink="https://stats-dash-v2.herokuapp.com"
                    codeLink="https://github.com/po1sigala/StatsDashV2"
                ></Cards>
                <Cards
                    image={""}
                    title="Newsly"
                    summary=" "
                    siteLink="https://po1sigala.github.io/Newsly2.0/"
                    codeLink="https://github.com/po1sigala/Newsly2.0"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    image={liri}
                    title="Liri"
                    summary=" "
                    siteLink="https://drive.google.com/open?id=1kZ6jd_4iQQRqV84rvnKMIUl3z2upq7Kb"
                    codeLink="https://github.com/po1sigala/LIRI"
                ></Cards>
                <Cards
                    image={sqlstore}
                    title="Sql Store"
                    summary=" "
                    siteLink="https://drive.google.com/open?id=1vAbtbXLYO5OE40AnexiR9mvsyS3VrYtf"
                    codeLink="https://github.com/po1sigala/SQLstore"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                {/*----------------- FIX LATER --------------------------*/}
                <Cards
                    title="React Traffic Light"
                    summary="tbd"
                    siteLink=""
                    codeLink=""
                ></Cards>
                <Cards
                    title="Company redesign"
                    image={bootstrap}
                    summary="tbd"
                      {/*----------------- FIX LATER --------------------------*/}
                    siteLink="https://po1sigala.github.io/premiercare.github.io/"
                    codeLink=""
                ></Cards>
                <Cards
                    title="Charged Up"
                    image={goku}
                    summary="tbd"
                    siteLink="https://po1sigala.github.io/chargedUp/"
                    codeLink=""
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    title="Gif that"
                    image={gify}
                    summary="tbd"
                    siteLink="https://po1sigala.github.io/giphtastic/"
                    codeLink=""
                ></Cards>
                <Cards
                    title="Timed Trivia"
                    image={football}
                    summary="tbd"
                    siteLink="https://po1sigala.github.io/triviagame/"
                    codeLink=""
                ></Cards>
                <Cards
                    title="memory game"
                    image={psychic}
                    summary="tbd"
                    siteLink="https://po1sigala.github.io/Psychic-Game/#"
                    codeLink=""
                ></Cards>
            </Row>
        </div>
    );
}
export default Projects;

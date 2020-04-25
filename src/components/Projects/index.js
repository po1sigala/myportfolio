import React from "react";
import Cards from "../Cards";
import "./style.css";
import Row from "react-bootstrap/Row";
import image from "../../assets/images/newsly.JPG";
import Blurb from "../../components/blurb";
import algos, {
    trafficLight,
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
    sqlstore,
} from "../../assets/images/index";

function Projects() {
    return (
        <div>
            <Blurb description="current Projects still WIP"></Blurb>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    image={image}
                    title="ViewPoints"
                    summary="News application using react AJAX and bootstrap."
                    siteLink="https://spincheck.herokuapp.com/search"
                    codeLink="https://github.com/po1sigala/FinalSpin"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    title="StatsIQ"
                    image={dunk}
                    summary="Full-Stack MVC Web application with detailed player stats using SQL, Node, JQuery."
                    siteLink="https://statsdashbb.herokuapp.com/"
                    codeLink="https://github.com/po1sigala/StatsDash"
                ></Cards>

                <Cards
                    image={statsdash}
                    title="StatsDash"
                    summary=" Full-Stack MERN Web application with custom database built from webscrapping and matching stats found on play-by-play sites using REGEX."
                    siteLink="https://stats-dash-v2.herokuapp.com"
                    codeLink="https://github.com/po1sigala/StatsDashV2"
                ></Cards>
                <Cards
                    image={newsly}
                    title="Newsly"
                    summary=" Event driven, scalable, Front end web application built with jQuery using multiple API requests via Ajax. Newsly is a hub for information which compares how a topic is being discussed across many media platforms. I have continued to work on this project independently."
                    siteLink="https://po1sigala.github.io/Newsly2.0/"
                    codeLink="https://github.com/po1sigala/Newsly2.0"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    image={liri}
                    title="Liri"
                    summary="Using node and a few npm modules I created a SIRI type assitsant which can find local bands, movie info, and songs"
                    siteLink="https://drive.google.com/open?id=1kZ6jd_4iQQRqV84rvnKMIUl3z2upq7Kb"
                    codeLink="https://github.com/po1sigala/LIRI"
                ></Cards>
                <Cards
                    image={sqlstore}
                    title="Sql Store"
                    summary="Using node and inquirer, this app interacts with an SQL database to make purchases and update an inventory."
                    siteLink="https://drive.google.com/open?id=1vAbtbXLYO5OE40AnexiR9mvsyS3VrYtf"
                    codeLink="https://github.com/po1sigala/SQLstore"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                {/*----------------- FIX LATER --------------------------*/}
                <Cards
                    title="React Traffic Light"
                    image={trafficLight}
                    summary="Front End React app utilizing timers to control an intersection. I also included a button which hits giphy API to return stop and go gifs"
                    siteLink="http://herokuspin.herokuapp.com/"
                    codeLink="https://github.com/po1sigala/reactintersection"
                ></Cards>
                <Cards
                    title="memory game"
                    image={psychic}
                    summary="a guessing game I put together using JS and bootstrap"
                    siteLink="https://po1sigala.github.io/Psychic-Game/#"
                    codeLink="https://github.com/po1sigala/Psychic-Game"
                ></Cards>
                <Cards
                    title="Charged Up"
                    image={goku}
                    summary="Here Ive made another game using JQuery encorporating a few more elements than compared to the Psychic game. "
                    siteLink="https://po1sigala.github.io/chargedUp/"
                    codeLink="https://github.com/po1sigala/chargedUp"
                ></Cards>
            </Row>
            <Row className="Projects col-md-12 col-lg-12 col-sm-12">
                <Cards
                    title="Gif that"
                    image={gify}
                    summary="using ajax technology this simple application uses jQuery to get related gifs from giphy API and display them. It also allows the user to dynamically create new buttons which query a new gif."
                    siteLink="https://po1sigala.github.io/giphtastic/"
                    codeLink="https://github.com/po1sigala/giphtastic"
                ></Cards>
                <Cards
                    title="Timed Trivia"
                    image={football}
                    summary="using timer functions and alerts in jQuery this application quizzes the user on NFL trivia."
                    siteLink="https://po1sigala.github.io/triviagame/"
                    codeLink="https://github.com/po1sigala/triviagame"
                ></Cards>

                <Cards
                    title="Company redesign"
                    image={bootstrap}
                    summary="Here I have redesigned a companies website using bootstap. I aimed to improvse responsivenes and simplify it for a better user esperience"
                    siteLink="https://po1sigala.github.io/premiercare.github.io/"
                    codeLink="https://github.com/po1sigala/premiercare.github.io"
                ></Cards>
            </Row>
        </div>
    );
}
export default Projects;

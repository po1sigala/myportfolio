import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import Blurb from "../components/blurb/index";
import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <Jumbotron className="jumbo">
                    <h1>Get to Know your Next Engineer</h1>
                    <p>
                        I'm a people person, a JavaScript enthusiast, and an
                        avid learner. I have a passion for code and for helping
                        others. Just below you can visit some of my other pasion
                        projects on teaching web-development and solutions to
                        some common interview algos. Continue reading for a
                        short bio on my journey as a dev and some personal
                        projects I am proud of.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <Blurb description="Aside from creating web apps I enjoy teaching. Below are my pages on taching algorythims, web developmemnt. and my personal social media presence."></Blurb>
                <Carousel></Carousel>
                <Projects></Projects>
            </div>
        );
    }
}
export default Portfolio;

import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import tutorial from "../../assets/images/alex'salgos.JPG";
import "./style.css";
class MyCarousel extends Component {
    handleClick() {
        console.log("hello");
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tutorial}
                        target="_blank"
                        alt="First slide"
                        onClick={this.handleClick}
                    />
                    <Carousel.Caption className="carosel">
                        <h3>My Tutorials</h3>
                        <p>
                            Learn Full-Stack Web development using javascript,
                            jQuery and React
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default MyCarousel;

import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBar(props) {
    return (
        <Nav activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">My Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">GitHub</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Coding Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Algorithym Solutions</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default NavBar;

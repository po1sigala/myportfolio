import React from "react";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
    return (
        <Router>
            <Nav></Nav>
            <Switch>
                <Route exact path="/" component={Portfolio} />
            </Switch>
        </Router>
    );
}
export default App;

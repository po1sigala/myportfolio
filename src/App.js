import React from "react";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Portfolio} />
            </Switch>
        </Router>
    );
}
export default App;

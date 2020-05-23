import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./home";
import Orchards from "./orchards";
import Idylworld from "./idylworld";
import Contact from "./contact";
import About from "./about";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/orchards" exact component={Orchards} />
                    <Route path="/idylworld" exact component={Idylworld} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

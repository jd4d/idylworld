import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./home";
import Orchards from "./orchards";
import Connected from "./connected";
import Abundant from "./abundant";
import Healthful from "./healthful";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/orchards" exact component={Orchards} />
                    <Route path="/connected" exact component={Connected} />
                    <Route path="/abundant" exact component={Abundant} />
                    <Route path="/healthful" exact component={Healthful} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

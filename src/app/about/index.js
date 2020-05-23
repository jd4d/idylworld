import React, { Component } from "react";

// components
import Navbar from "../navbar";
import { FullscreenContainer } from "../_shared/styled";

class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FullscreenContainer>About</FullscreenContainer>
            </>
        );
    }
}

export default About;

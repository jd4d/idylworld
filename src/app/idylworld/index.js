import React, { Component } from "react";

// components
import Navbar from "../navbar";
import { FullscreenContainer } from "../_shared/styled";

class Idylworld extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FullscreenContainer>idylworld</FullscreenContainer>
            </>
        );
    }
}

export default Idylworld;

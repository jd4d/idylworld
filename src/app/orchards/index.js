import React, { Component } from "react";

// components
import Navbar from "../navbar";
import { FullscreenContainer } from "../_shared/styled";

class Orchards extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FullscreenContainer>hello I'm orchards</FullscreenContainer>
            </>
        );
    }
}

export default Orchards;

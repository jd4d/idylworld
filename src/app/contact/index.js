import React, { Component } from "react";

// components
import Navbar from "../navbar";
import { FullscreenContainer } from "../_shared/styled";

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FullscreenContainer>Contact</FullscreenContainer>
            </>
        );
    }
}

export default Contact;

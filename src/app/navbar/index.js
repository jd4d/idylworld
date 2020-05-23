import React, { Component } from "react";

// components
import {
    NavbarContainer,
    LeftAlignedContainer,
    RightAlignedContainer,
    NavbarItem,
    IdylworldLogo,
    NavbarTitle,
} from "./styled";

// icons & images
import idylworldLogo from "../../assets/idylworld-logo.png";
import homeIcon from "../../assets/home-grey.png";

class Navbar extends Component {
    render() {
        return (
            <>
                <NavbarContainer>
                    <LeftAlignedContainer href="/">
                        <IdylworldLogo src={idylworldLogo} alt="words" />
                        <NavbarTitle>Idylworld</NavbarTitle>
                    </LeftAlignedContainer>
                    <RightAlignedContainer>
                        <NavbarItem href="/">
                            <img src={homeIcon} alt="home" style={{ width: "26px" }} />
                        </NavbarItem>
                        <NavbarItem href="/orchards">Connected</NavbarItem>
                        <NavbarItem href="/idylworld">Abundant</NavbarItem>
                        <NavbarItem href="/idylworld">Healthful</NavbarItem>
                        <NavbarItem href="/contact">Orchards</NavbarItem>
                    </RightAlignedContainer>
                </NavbarContainer>
            </>
        );
    }
}

export default Navbar;

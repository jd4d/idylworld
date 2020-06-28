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
                        <NavbarItem href="/connected">Connected</NavbarItem>
                        <NavbarItem href="/abundant">Abundant</NavbarItem>
                        <NavbarItem href="/healthful">Healthful</NavbarItem>
                        <NavbarItem href="/orchards">Orchards</NavbarItem>
                    </RightAlignedContainer>
                </NavbarContainer>
            </>
        );
    }
}

export default Navbar;

import React from "react";

// components
import {
    FooterContainer,
    LeftContainer,
    CenterContainer,
    RightContainer,
    IdylworldLogo,
    FooterIcon,
    RightContainerItem,
    LeftContainerText,
    RightContainerText,
    LeftContainerItem,
    ContentItemTitle,
} from "./styled";

// icons & images
import PhoneIcon from "../../assets/phone-grey.png";
import MailIcon from "../../assets/mail-grey.png";
import LocationIcon from "../../assets/location-grey.png";
import FacebookIcon from "../../assets/facebook-grey.png";
import InstagramIcon from "../../assets/instagram-grey.png";
import TwitterIcon from "../../assets/twitter-grey.png";
import IdylworldLogoImage from "../../assets/idylworld-logo.png";

export default () => {
    return (
        <FooterContainer>
            <LeftContainer>
                <ContentItemTitle>Chat With Us</ContentItemTitle>
                <LeftContainerItem>
                    <FooterIcon src={PhoneIcon} alt="phone" />
                    <LeftContainerText>+91 83083 29038</LeftContainerText>
                </LeftContainerItem>
                <LeftContainerItem>
                    <FooterIcon src={MailIcon} alt="mail" />
                    <LeftContainerText>info@idylworld.com</LeftContainerText>
                </LeftContainerItem>
                <LeftContainerItem style={{ marginBottom: "none" }}>
                    <FooterIcon src={LocationIcon} alt="location" />
                    <LeftContainerText>
                        123 One Drive, <br />
                        Pune, India - 283940
                    </LeftContainerText>
                </LeftContainerItem>
            </LeftContainer>
            <CenterContainer>
                <IdylworldLogo src={IdylworldLogoImage} alt="Idylworld Logo" />
            </CenterContainer>
            <RightContainer>
                <ContentItemTitle>Follow Us</ContentItemTitle>
                <RightContainerItem
                    href="https://www.instagram.com/idylworld/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RightContainerText>Facebook</RightContainerText>
                    <FooterIcon src={FacebookIcon} alt="facebook" />
                </RightContainerItem>
                <RightContainerItem
                    href="https://www.instagram.com/idylworld/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RightContainerText>Instagram</RightContainerText>
                    <FooterIcon src={InstagramIcon} alt="mail" />
                </RightContainerItem>
                <RightContainerItem
                    href="https://twitter.com/idylworld?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginBottom: "none" }}
                >
                    <RightContainerText>Twitter</RightContainerText>
                    <FooterIcon src={TwitterIcon} alt="location" />
                </RightContainerItem>
            </RightContainer>
        </FooterContainer>
    );
};

import React, { Component } from "react";
import { ControlBar } from "video-react";
import "video-react/dist/video-react.css";

// components
import {
    BackgroundImage,
    LargeCenteredQuote,
    LargeCenteredDescription,
    WatchVideoButton,
    FollowUsAndIconsContainer,
    FollowUs,
    WhiteLine,
    SocialMediaWhiteLogo,
    ScrollButtonContainer,
    ScrollButtonImage,
    GreyFullscreen,
    BlueHighlight,
    OrangeHighlight,
    GreenHighlight,
    VideoPlayer,
    GreenBlock,
} from "./styled";
import Navbar from "../navbar";
import Footer from "../footer";

// icons & images
import instagramLogo from "../../assets/instagram-white.png";
import facebookLogo from "../../assets/facebook-white.png";
import twitterLogo from "../../assets/twitter-white.png";
import scrollButton from "../../assets/scroll-button.png";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <BackgroundImage>
                    <LargeCenteredQuote>Welcome to Idylworld,</LargeCenteredQuote>
                    <LargeCenteredDescription>
                        Pune's exceptional hill community that is
                        <BlueHighlight>connected</BlueHighlight>,<OrangeHighlight>abundant</OrangeHighlight>and
                        <GreenHighlight>healthful</GreenHighlight> for the successful discerning global Indian.
                    </LargeCenteredDescription>
                    <WatchVideoButton href="#video">Watch Our Video</WatchVideoButton>
                    <FollowUsAndIconsContainer>
                        <FollowUs>follow us</FollowUs>
                        <WhiteLine />
                        <a href="https://www.instagram.com/idylworld/" target="_blank" rel="noopener noreferrer">
                            <SocialMediaWhiteLogo src={instagramLogo} alt="insta" />
                        </a>
                        <a href="https://www.facebook.com/idylworldindia/" target="_blank" rel="noopener noreferrer">
                            <SocialMediaWhiteLogo src={facebookLogo} alt="fb" />
                        </a>
                        <a href="https://twitter.com/idylworld?lang=en" target="_blank" rel="noopener noreferrer">
                            <SocialMediaWhiteLogo src={twitterLogo} alt="tw" />
                        </a>
                    </FollowUsAndIconsContainer>
                    <ScrollButtonContainer id="video" href="#video">
                        <ScrollButtonImage src={scrollButton} alt="scroll button" />
                    </ScrollButtonContainer>
                </BackgroundImage>
                <GreyFullscreen>
                    <VideoPlayer
                        fluid={false}
                        playsInline
                        width={1100}
                        muted
                        autoPlay
                        loop={true}
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/Idylworld%20Video.mp4"
                    >
                        <ControlBar autoHide={true} disableCompletely={true} />
                    </VideoPlayer>
                </GreyFullscreen>
                <Footer />
            </>
        );
    }
}

export default Home;

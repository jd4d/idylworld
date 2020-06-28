import styled from "styled-components";
import { Player } from "video-react";

// components
import { FullscreenContainer } from "../_shared/styled.js";

// images
import landingImage from "../../assets/idylworld-main.jpg";

export const BackgroundImage = styled(FullscreenContainer)`
    background-image: url(${landingImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 65px;
`;

export const LargeCenteredQuote = styled.div`
    color: white;
    font-size: 60px;
    font-family: Work Sans;
    padding-top: 35vh;
`;

export const LargeCenteredDescription = styled.div`
    margin-top: 5px;
    color: white;
    font-family: Montserrat;
    font-size: 28px;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 400;
    max-width: 630px;
    line-height: 150%;
`;

export const WatchVideoButton = styled.a`
    margin-top: 30px;
    color: grey;
    padding: 12px 16px 10px 17px;
    font-family: Montserrat;
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;
    background: #f5f5f5;
    border-radius: 5px;
    text-transform: uppercase;
    outline: none;
    text-decoration: none;
`;

export const FollowUsAndIconsContainer = styled.div`
    position: absolute;
    bottom: 55px;
    right: 10px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;

export const FollowUs = styled.div`
    transform: rotate(90deg);
    color: white;
    font-family: Montserrat;
    font-size: 18px;
    letter-spacing: 2px;
    width: 200px;
    padding-right: 100px;
`;

export const WhiteLine = styled.div`
    height: 100px;
    border-left: 2px solid white;
    padding-right: 2px;
`;

export const SocialMediaWhiteLogo = styled.img`
    height: 20px;
    margin-top: 30px;
`;

export const ScrollButtonContainer = styled.a`
    position: absolute;
    bottom: 30px;
`;

export const ScrollButtonImage = styled.img`
    height: 20px;
    border: none;
`;

export const GreyFullscreen = styled(FullscreenContainer)`
    background-color: #f5f5f5;
    justify-content: center;
`;

export const HighlightedText = styled.div`
    font-weight: 500;
    display: inline;
    padding: 0 5px;
    margin: 0px 5px;
    border-radius: 2px;
`;

export const BlueHighlight = styled(HighlightedText)`
    background: rgba(43, 144, 247, 0.7);
`;

export const OrangeHighlight = styled(HighlightedText)`
    background: rgba(247, 119, 43, 0.7);
`;

export const GreenHighlight = styled(HighlightedText)`
    background: rgba(56, 152, 48, 0.7);
`;

export const VideoPlayer = styled(Player)`
    :focus {
        outline: none !important;
    }
`;

export const GreenBlock = styled.div`
    height: calc(100vh - (300px + 65px));
    background: #637f44;
    display: flex;
    align-items: center;
    justify-content: center;
`;

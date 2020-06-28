import styled from "styled-components";

// components
import { FullscreenContainer } from "../_shared/styled.js";

// images
import ConnectedCarousel1 from "../../assets/connected-carousel-1/map-carousel-1.png";
import ConnectedCarousel2 from "../../assets/connected-carousel-1/map-carousel-2.png";
import ConnectedCarousel3 from "../../assets/connected-carousel-1/map-carousel-3.png";

export const BlueFullscreen = styled(FullscreenContainer)`
    background: #f5f5f5;
    margin-top: 65px;
    justify-content: center;
    align-items: center;
`;

export const CarouselImage1 = styled.div`
    background-image: url(${ConnectedCarousel1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 5px;
`;

export const CarouselImage2 = styled.div`
    background-image: url(${ConnectedCarousel2});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 5px;
`;

export const CarouselImage3 = styled.div`
    background-image: url(${ConnectedCarousel3});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 5px;
`;

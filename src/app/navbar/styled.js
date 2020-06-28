import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 65px;
    background-color: #f5f5f5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding: 0 10px 0 30px;
`;

export const LeftAlignedContainer = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`;

export const RightAlignedContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavbarItem = styled.a`
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    margin: 20px;
    color: #797979;
    text-decoration: none;
`;

export const IdylworldLogo = styled.img`
    height: 45px;
`;

export const NavbarTitle = styled.div`
    font-family: Work Sans;
    font-size: 40px;
    color: #bd971b;
    margin-left: 10px;
`;

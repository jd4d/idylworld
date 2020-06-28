import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 200px;
    width: 100vw;
    background: #f5f5f5;
    padding: 30px 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentItem = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    color: #797979;
`;

export const ContentItemTitle = styled.div`
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const LeftContainer = styled(ContentItem)`
    align-items: flex-start;
`;

export const LeftContainerItem = styled.div`
    display: flex;
    flex-direction: center;
    margin-bottom: 15px;
`;

export const CenterContainer = styled(ContentItem)`
    justify-content: center;
    align-items: center;
`;

export const RightContainer = styled(ContentItem)`
    align-items: flex-end;
`;

export const RightContainerItem = styled.a`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    text-decoration: none;
    color: #797979;
`;

export const IdylworldLogo = styled.img`
    width: 100px;
`;

export const FooterIcon = styled.img`
    height: 20px;
`;

export const LeftContainerText = styled.div`
    margin-left: 15px;
`;

export const RightContainerText = styled.div`
    margin-right: 15px;
`;

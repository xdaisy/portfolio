import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #31683f;
    height: 10vh;
    display: flex;
    justify-content: center;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #FFFEEF;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: xx-large;
    cursor: pointer;
    &.active {
        color: #00FF4C;
    }
`;

export const NavMenu = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
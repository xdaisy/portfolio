import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #31683f;
    height: min(10vh, 10vw);
    display: flex;
    justify-content: center;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #FFFEEF;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    font-size: larger;
    cursor: pointer;
    &.active {
        color: #00FF4C;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
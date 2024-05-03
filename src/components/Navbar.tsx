// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #f0f0f0;
    padding: 10px 0;
`;

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLink to="/userlist">친구 목록</NavbarLink>
            <NavbarLink to="/chattinglist">대화 목록</NavbarLink>
            <NavbarLink to="/profile">내 프로필</NavbarLink>
        </NavbarContainer>
    );
};

export default Navbar;

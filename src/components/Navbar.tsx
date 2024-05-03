// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    font-size:20px;
    width: 375px;
    bottom:-33px;
    height: 80px;
    background: #f0f0f0;
    padding-top: 30px;
	
    
   
`;

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: black;
    
    
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLink to="/userlist">친구</NavbarLink>
            <NavbarLink to="/chattinglist">대화</NavbarLink>
            <NavbarLink to="/profile">프로필</NavbarLink>
        </NavbarContainer>
    );
};

export default Navbar;

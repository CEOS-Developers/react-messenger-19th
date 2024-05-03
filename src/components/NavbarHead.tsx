// src/components/NavbarHead.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarHeadContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    font-size:20px;
    width: 375px;
   top:-30px;
   height: 56px;
    background: #f0f0f0;
    padding-top: 30px;
	
    
   
`;

const NavbarHeadLink = styled(Link)`
    text-decoration: none;
    color: black;
    
    
`;

const NavbarHead = () => {
    return (
        <NavbarHeadContainer>
       대화
        </NavbarHeadContainer>
    );
};

export default NavbarHead;

import React from 'react';
import styled from 'styled-components';

interface IphoneFooterProps {
    src: string;
  }

const IphoneFooter: React.FC<IphoneFooterProps> = ({ src }) => {
    return <IphoneFooterImg src={src} alt="iPhone Header"/>
  };
  
  export default IphoneFooter;

  
const IphoneFooterImg = styled.img`
display: block;
width: 100%; 
height: auto; 
max-width: 375px;
margin: 0 auto; 
background-color: #F7F8FC;
border-radius: 0 0 30px 30px ;

@media (max-width: 768px) {
  display: none; 
}
`;

import React from 'react';
import styled from 'styled-components';

interface IphoneHeaderProps {
  src: string;
}


const IphoneHeader: React.FC<IphoneHeaderProps> = ({ src }) => {
  return <IphoneHeaderImg src={src} alt="iPhone Header"/>
};

export default IphoneHeader;

const IphoneHeaderImg = styled.img`
  display: block;
  width: 100%; 
  height: auto; 
  max-width: 375px;
  margin: 0 auto; 
  background-color: #F7F8FC;
  border-radius: 30px 30px 0 0;

  @media (max-width: 768px) {
    display: block; 
  }
`;

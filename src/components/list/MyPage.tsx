import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { usersState } from '../state/userState';
import styled from 'styled-components';
import IphoneHeader from '../main/IphoneHeader';
import IphoneFooter from '../main/IphoneFooter';
import NavigatingFooter from './NavigateFooter';
import MyPageHeader from './MyPageHeader';

const MyPage = () => {
   
  
  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.png'/>
        <MyPageHeader/>
        <ProfileContainer>
          <EditProfileLabel>프로필 수정</EditProfileLabel>
          <EditProfileLabel>바로가기</EditProfileLabel>
          <SNSContainer>
            <SNSLogo src="/assets/Instagram.svg"/>
            <Label>Instagram</Label>
          </SNSContainer>
          <SNSContainer>
            <SNSLogo src="/assets/Youtube.svg"/>
            <Label>Youtube</Label>
          </SNSContainer>
        </ProfileContainer>
        <IphoneFooter src='/assets/Home Indicator.png'/>
      </AppContainer>
    </Container>
  );
};
export default MyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
  width: 100vw; 
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw; 
  height: 100vh; 
  background-color: #FFFFFF; 

  @media (min-width: 768px) { 
    max-width: 375px;
    max-height: 812px;
    min-height: 812px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileContainer = styled.div`
display:flex;
padding-top: 31px;
flex-direction: column;
height: calc(100vh - 31px);
`;

const EditProfileLabel = styled.span`
  font-family: Pretenard;
  font-size: 17px;
  font-weight: 600;
  color: #1F1F1F;
  margin-left: 15px;
  margin-bottom: 24px;
  `;

const SNSLogo = styled.img`
  width: 37px;
  height:37px;
  margin-left: 16px;
   
`;

const Label = styled.span`
font-size: 17px;
font-weight: 500;
margin-left: 17px;
`;

const SNSContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 24px;
`;
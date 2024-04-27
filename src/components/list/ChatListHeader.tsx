import React from 'react';
import styled from 'styled-components';

interface ChatListHeaderProps {
    onEditClick: () => void;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const ChatListHeader: React.FC<ChatListHeaderProps> = ({ onEditClick, onSearchChange }) => {
    return (
        <HeaderContainer>
            <EditButton onClick={onEditClick}>편집</EditButton>
            <Title>대화</Title>
            <SearchInput
                type="text"
                onChange={onSearchChange}
            />
            <DivideLine src="/assets/Vector 564.svg"/>
        </HeaderContainer>
    );
};

export default ChatListHeader;

const HeaderContainer = styled.div`
    margin: 13px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const EditButton = styled.span`
    background-color: transparent;
    border: none;
    color: #007BFC;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 24px;
`;

const SearchInput = styled.input`
    flex-grow: 1;
    border-radius: 10px;
    width: 100%;
    height: 39px;
    border: none;
    outline: none;
    background-color: #EAEBF1;
    margin-bottom: 18px; 
`;
const DivideLine = styled.img`
    width: 100%;
    margin-bottom: 9px;
`;

import styled from 'styled-components';

export const ChatBottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ChatInput = styled.input`
  flex-grow: 1;
  margin-right: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SendButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
`;

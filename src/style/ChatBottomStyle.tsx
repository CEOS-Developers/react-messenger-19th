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

export const SendButton = styled.button<{ backgroundImage: string }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

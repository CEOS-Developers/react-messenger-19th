import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	background-color: gray;
`;

export const ChatHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 23px;
	height: 55px;
	background-color: #8cabd9;
	border-bottom: 0.5px solid #cdcdcd;
`;

export const HeaderBox = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	gap: 0 20px;
`;

export const SVGIcon = styled.img`
	width: 18px;
	height: 18px;
`;

export const Name = styled.div`
	font-weight: 600;
	font-size: 16px;
	margin-left: 10px;
	line-height: 60px;
`;

export const ChatContainer = styled.div`
	height: calc(100vh - 110px);
	flex-grow: 1;
	overflow-y: auto;
	background-color: #8cabd9;
	padding: 15px;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0 17px;
	height: 55px;
	background-color: white;
	gap: 17px;
`;

export const ChatForm = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ChatInput = styled.input`
	width: 90%;
	height: 39px;
	border-radius: 30px;
	padding: 15px;
	background-color: #f5f5f5;

	outline: none;
	border: none;
`;

export const DateSeparator = styled.div`
	width: 44%;
	margin: 10px 0;
	padding: 6px 0;
	text-align: center;

	background-color: #7692b9;
	border-radius: 50px;
	color: #fff;
	font-size: 12px;
`;

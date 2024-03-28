export interface Message {
	userId: number;
	name: string;
	text: string;
	sender: string;
	sentTime: string;
	sentDate: string;
}

export interface MyFirstMessageProps {
	message: string;
	sentTime: string;
	isContinuous: boolean;
}

export interface YourFirstMessageProps {
	name: string;
	message: string;
	sentTime: string;
	isContinuous: boolean;
}

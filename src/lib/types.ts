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

export interface User {
	userId: number;
	name: string;
	email: string;
}

// UserData 배열을 위한 타입
export type UserData = User[];

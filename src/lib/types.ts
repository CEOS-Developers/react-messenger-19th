export interface Message {
	userId: number;

	name: string;
	text: string;
	sender: string;
}

export interface MyFirstMessageProps {
	message: string;
	// sentTime: string;
}

export interface YourFirstMessageProps {
	name: string;
	message: string;
	// sentTime: string;
}

export interface ChatData {
  chats: Chat[];
}

export interface Chat {
  id: string;
  partner: User;
  messages: Message[];
}

export interface User {
  id: string;
  name: string;
  profileImage: string;
  lastAccess: string;
  phoneNumber?: string;
}

interface Photo {
  name: string;
  url: string;
  size: number;
}

export interface Message {
  id: string;
  senderId: string;
  text?: string;
  createdAt: string;
  photo?: Photo;
}

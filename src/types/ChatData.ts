export interface ChatData {
  chats: Chat[];
}

export interface Chat {
  id: string;
  users: User[];
  messages: Message[];
}

export interface User {
  id: string;
  name: string;
  profileImage: string;
  lastAccess: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  createdAt: string;
}

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

export interface initial {
  allChats: Chat[];
  selectedChatId: null | string;
  participants: {
    me: null | User;
    partner: null | User;
  };
}

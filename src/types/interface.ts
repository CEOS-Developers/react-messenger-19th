export interface TitleBarProps {
  name: string;
  profileImg: string;
  isActive?: boolean;
}

export interface User {
  id: number;
  name: string;
  profileImg: string;
  isActive: boolean;
}

export interface Chats {
  chatRoomId: number;
  userList: number[];
  chatList: {
    id: number;
    senderId: number;
    content: string;
    time: string;
    isRead: boolean;
  }[];
}

export interface ChatProps {
  lastChatContent: string;
  lastChatTime: string;
  $isRead: boolean;
}

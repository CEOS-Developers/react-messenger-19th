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

export interface ChatProps {
  lastChatContent: string;
  lastChatTime: string;
  $isRead: boolean;
}

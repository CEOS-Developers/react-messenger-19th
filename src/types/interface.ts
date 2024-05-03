// 재사용하는 경우 분리해놓음
export interface UserProps {
  id?: number;
  name: string;
  profileImg: string;
  isActive?: boolean;
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

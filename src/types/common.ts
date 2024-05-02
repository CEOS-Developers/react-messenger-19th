export interface ChattingRoom {
  id: string;
  chat: {
    chatId: number;
    to: string;
    from: string;
    content: string;
    time: string;
  }[];
}

export interface Chat {
  chatId: string;
  to: string;
  from: string;
  content: string;
  date: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

export interface OppochatProps {
  content: string;
  time: string;
  isDisplay: boolean;
}

export interface MychatProps {
  content: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

export interface OppoChangeChatProps {
  content: string;
  time: string;
  isDisplay: boolean;
  from: string;
}

export interface ChatCardProps {
  img: string;
  name: string;
  lastMessage: string;
  date: string;
  unReadCount: number;
}
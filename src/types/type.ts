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

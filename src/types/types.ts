export interface MsgType {
  id: number;
  rcvd: boolean;
  isSameTime: boolean;
  isFirst: boolean;
  text: string;
  time: string;
}

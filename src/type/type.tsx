export type dateStringProps = {
  dateString: string;
};

export type isMessageOwnerEqualsWithModeProps = {
  isEqual: boolean;
};

export type processedMessageData = {
  content: string;
  createdAt: string;
  createdDate: string;
  from: number;
  like: boolean;
};

export type processedMessageDataArray = processedMessageData[];

export interface messageDataObject {
  [key: string]: processedMessageDataArray;
}

export interface DetailsType {
  text: string;
  time: string;
}
export interface ChatType {
  id: string;
  from: number;
  to: number;
  details: DetailsType;
}

// 채팅 시간을 "09:41am" 형식의 문자열로 변환하는 함수
export default function FormatTimeToAMPM(dateInput: Date | string): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; // 시간이 0이면 12로 변환
  const minutesStr = `${minutes < 10 ? '0' : ''}${minutes}`;
  const strTime = `${hours}:${minutesStr}${ampm}`;

  return strTime;
}

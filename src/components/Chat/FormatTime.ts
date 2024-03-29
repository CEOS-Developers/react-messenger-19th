export default function FormatTime(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; // 시간이 0이면 12로 변환
  const minutesStr = `${minutes < 10 ? '0' : ''}${minutes}`;
  const strTime = `${hours}:${minutesStr}${ampm}`;

  return strTime;
}

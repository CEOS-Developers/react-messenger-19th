//서버가 저장할 수 있는 형태 T10:04:20로 바꾸는 포맷
export default function date() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  let timePeriod = 'T';

  return `${timePeriod}${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}

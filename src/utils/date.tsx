export default function date() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, '0');
  let timePeriod = '오전';

  if (hours >= 12) {
    timePeriod = '오후';
  }

  const formatHours = hours % 12 || 12;

  return `${timePeriod} ${formatHours}:${minutes}`;
}

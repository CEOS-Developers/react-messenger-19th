export default function formatDate(time: string) {
  const hour = parseInt(time.substring(1, 3));
  const minute = parseInt(time.substring(4, 6));

  const period = hour >= 12 ? '오후' : '오전';
  const formatHours = hour % 12 || 12;
  return `${period} ${formatHours}:${minute.toString().padStart(2, '0')}`;
}

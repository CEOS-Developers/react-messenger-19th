export const getCurrentTime = () => {
  const today = new Date();
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24시간제로 표시
  });
  const formattedTime = formatter.format(today);

  return formattedTime;
};

// 채팅 시간을 "dd/mm/yy" 형식의 문자열로 변환하는 함수
export default function formatDateToDMY(dateString: Date | string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const year = date.getFullYear() % 100; // 년도의 마지막 두 자리만 가져옴

  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
}

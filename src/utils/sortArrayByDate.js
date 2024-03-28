export default function sortByDate(a, b) {
  // 'yyyy-mm-dd' 형식의 문자열을 날짜로 변환하여 비교
  const dateA = new Date(a);
  const dateB = new Date(b);

  // 오름차순 정렬
  return dateA - dateB;
}

function toISOString(year, month, day, hour, minute) {
  // JavaScript의 Date 객체는 월을 0부터 시작으로 카운트하기 때문에, 월에서 1을 빼줍니다.
  // Date 객체를 생성할 때 UTC 시간으로 설정하기 위해 Date.UTC 메서드를 사용합니다.
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute));

  // ISO 8601 형식의 문자열로 변환
  return date.toISOString();
}

// 함수 사용 예시
console.log(toISOString(2024, 3, 19, 20, 45));
console.log(toISOString(2024, 3, 19, 20, 48));
console.log(toISOString(2024, 3, 19, 20, 49));
console.log(toISOString(2024, 3, 19, 20, 51));
console.log(toISOString(2024, 3, 19, 20, 52));
console.log(toISOString(2024, 3, 20, 1, 32));

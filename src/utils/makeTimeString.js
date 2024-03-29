// 사용자의 시간대 오프셋(시간대에 따라 분 단위로 설정)
function getUserTimezoneOffset() {
  // 예시: 한국 시간대의 경우 UTC+9
  return 9 * 60; // 분 단위로 설정
}

// ISO 문자열로 시간을 보정하는 함수
export function adjustTimeForUserLocation() {
  const currentTime = new Date();
  const userTimezoneOffset = getUserTimezoneOffset();
  const adjustedTime = new Date(
    currentTime.getTime() + userTimezoneOffset * 60000
  ); // 시간대 오프셋을 밀리초 단위로 변환하여 시간 보정
  return adjustedTime.toISOString();
}

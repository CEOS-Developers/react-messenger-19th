export function makeUserIdNumber(name) {
  // 각 문자를 아스키코드 값으로 바꿔서 사용자 id를 바꿈.
  let hash = 0;
  if (name.length === 0) return hash;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// 이름 짧게 변환하는 로직
export default function formatName(name: string) {
  const parts = name.split(' ');
  if (parts.length > 1) {
    const lastInitial = parts.pop()!.charAt(0); // 띄어쓰기 다음 첫 글자 구하기. parts.pop()의 결과가 undefined가 아니라는 것을 명시하기 위해 !를 사용함
    return `${parts.join(' ')} ${lastInitial}.`;
  }
  return name; // 이름에 공백이 없는 경우 변환 없이 반환
}

import { atom } from 'recoil';

export const selectedUserState = atom({
  key: 'selectedUserState',
  default: 1, // 기본값으로 사용자 ID 2 설정
});

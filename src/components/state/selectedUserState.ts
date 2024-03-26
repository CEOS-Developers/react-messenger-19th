import { atom } from 'recoil';

export const selectedUserState = atom({
  key: 'selectedUserState',
  default: 2, // 기본값으로 사용자 ID 1 설정
});

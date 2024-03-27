import { atom } from 'recoil';

export const UserState = atom<string>({
  key: 'userState',
  default: '송은수',
});

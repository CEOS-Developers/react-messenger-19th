import { atom } from 'recoil';

interface UserState {
  user: string;
  stateMessage: string;
  instagram: string;
  github: string;
  behance: string;
  img: string;
}

export const UserState = atom<UserState>({
  key: 'userState',
  default: {
    user: '송은수',
    stateMessage: '안녕하세요!',
    instagram: 'https://www.instagram.com/',
    github: 'github.com/songess',
    behance: 'https://www.behance.net/',
    img: '/Introduce.png'
  },
});

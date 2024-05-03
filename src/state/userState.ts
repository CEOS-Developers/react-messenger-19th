// src/state/userState.ts

import { atom } from 'recoil';

interface User {
  id: string;
  name: string;
  image: string; 
}

export const currentUserState = atom<string>({
  key: 'currentUser',
  default: 'User1',
});

export const userListState = atom<User[]>({ 
  key: 'userListState',
  default: [
    { id: '1', name: '김모씨', image: '' },
    { id: '2', name: '박모씨', image: '' },
    { id: '3', name: '최모씨', image: '' }
  ],
});

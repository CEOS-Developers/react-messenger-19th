import { atom } from 'recoil';
import { friends } from '../fakedata/friends';

export const selectedFriendState = atom({
  key: 'selectedFriendState',
  default: friends[0], 
});
// src/state/userProfileState.ts

import { atom } from 'recoil';

export const userProfileState = atom({
	key: 'userProfileState',
	default: {
		name: '이영인',
		phone: '82) 10-1234-5678',
		image: '/item/profile_mini2.png',
		github: 'https://github.com/jinnyleeis',
		instagram: 'https://www.instagram.com/',
	},
});

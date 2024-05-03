// src/state/userProfileState.ts

import { atom } from 'recoil';

export const userProfileState = atom({
    key: 'userProfileState',
    default: {
        name: '김모씨',
        phone: '82) 10-1234-5678',
        image: '',
        github: 'https://github.com/jinnyleeis',
        instagram: 'https://www.instagram.com/',
    }
    }
);

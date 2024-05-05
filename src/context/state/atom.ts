import { atom } from 'recoil';
import { messageDataObject } from 'types/type';

export const messageDataState = atom({
  key: 'messageData',
  default: {} as messageDataObject,
});

export const messageDateArrayState = atom({
  key: 'messageDateArray',
  default: [] as string[],
});

// 추후에 유저들을 identifier 숫자로 구분할 것이기 때문에 확장성을 고려함
export const userNumberState = atom({
  key: 'userNumber',
  default: 1,
});

export const isInputBoxFocusedState = atom({
  key: 'isInputBoxFocused',
  default: false,
});

export const scrollToBottomState = atom({
  key: 'scrollToBottomState',
  default: () => {},
});

export const isMessageLikeButtonClickedState = atom({
  key: 'isMessageLikeButtonClicked',
  default: false,
});

//유저가 '/'에 있으면 friends고, '/messages'에 있으면 messages, '/chat'에 있으면 chat, '/profile에 있으면' profile임
export const userPageModeState = atom({
  key: 'userPageMode',
  default: 'friends', // 추후에 랜딩 페이지가 생기면 그냥 ''이 될 것임
});

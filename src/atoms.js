import { atom } from 'recoil';

export const chatDataState = atom({
  key: 'chatData', // 상태의 고유 키
  default: {
    r_id: 0, // 채팅방 고유 id
    isGroup: false, // 그룹 채팅 여부
    r_name: '', // 채팅방 이름
    r_profile: '', // 수신자 프로필 이미지
    chat: [
      {
        c_id: 0,
        sender: '',
        receiver: '',
        value: '',
        time: ''
      }
    ]
    }
  }
);

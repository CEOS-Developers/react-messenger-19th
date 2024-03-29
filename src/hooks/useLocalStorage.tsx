import { useEffect, useState } from 'react';

export default function useLocalStorage() {
  const [localStorageChatMessageData, setLocalStorageChatMessageData] =
    useState(null);
  const [
    localStorageChatMessageDateArray,
    setLocalStorageChatMessageDateArray,
  ] = useState(null);

  useEffect(() => {
    const storedChatMessageData = localStorage.getItem('chatMessageData');
    const storedChatMessageDateArray = localStorage.getItem(
      'chatMessageDateArray'
    );
    if (storedChatMessageData) {
      setLocalStorageChatMessageData(JSON.parse(storedChatMessageData));
    }

    if (storedChatMessageDateArray) {
      setLocalStorageChatMessageDateArray(
        JSON.parse(storedChatMessageDateArray)
      );
    }
  }, []);

  return [localStorageChatMessageData, localStorageChatMessageDateArray];
}

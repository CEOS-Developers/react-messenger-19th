import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import chattingData from "../data/chatting.json";

interface Chat {
  text: string;
  sender: number;
  timestamp: string;
}

interface SenderContextType {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
}

const SenderContext = createContext<SenderContextType | undefined>(undefined);

interface SenderProviderProps {
  children: ReactNode;
}

export const SenderProvider: React.FC<SenderProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<number>(0); // 상대방이 2가 됨

  const storedChatsJSON = localStorage.getItem("chats");
  const initialData: Chat[] = storedChatsJSON
    ? JSON.parse(storedChatsJSON)
    : chattingData;

  const [chats, setChats] = useState<Chat[]>(initialData);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <SenderContext.Provider
      value={{ currentUser, setCurrentUser, chats, setChats }}
    >
      {children}
    </SenderContext.Provider>
  );
};

export const useSenderContext = (): SenderContextType => {
  const context = useContext(SenderContext);
  if (!context)
    throw new Error("useSenderContext must be used within a SenderProvider");
  return context;
};

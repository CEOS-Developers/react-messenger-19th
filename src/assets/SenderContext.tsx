import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import chattingData from "../data/chatting.json";

interface SenderContextType {
  currentUser: number;
  setCurrentUser: React.Dispatch<React.SetStateAction<number>>;
  chats: Array<{ text: string; sender: number; timestamp: string }>;
  setChats: React.Dispatch<
    React.SetStateAction<
      Array<{ text: string; sender: number; timestamp: string }>
    >
  >;
}

const SenderContext = createContext<SenderContextType | undefined>(undefined);

interface SenderProviderProps {
  children: ReactNode;
}

export const SenderProvider: React.FC<SenderProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<number>(0); // 상대방이 2가 됨
  const [chats, setChats] = useState<
    Array<{ text: string; sender: number; timestamp: string }>
  >([]);

  useEffect(() => {
    const storedChats = localStorage.getItem("chats");
    const parsedChats = storedChats ? JSON.parse(storedChats) : [];
    if (parsedChats.length === 0) {
      localStorage.setItem("chats", JSON.stringify(chattingData));
    } else {
      setChats(parsedChats);
    }
  }, []);

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

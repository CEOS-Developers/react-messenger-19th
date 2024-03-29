import { createContext, useContext, useState, ReactNode } from "react";

interface SenderContextType {
  sender: number;
  setSender: React.Dispatch<React.SetStateAction<number>>;
}

const SenderContext = createContext<SenderContextType | undefined>(undefined);

interface SenderProviderProps {
  children: ReactNode;
}

export const SenderProvider: React.FC<SenderProviderProps> = ({ children }) => {
  const [sender, setSender] = useState<number>(0);

  return (
    <SenderContext.Provider value={{ sender, setSender }}>
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

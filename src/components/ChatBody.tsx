import React from 'react';

interface Message {
  id: number;
  from: string;
  content: string;
  date: string;
}

interface ChatBodyProps {
  messages: Message[];
  currentUser: string;
}



const ChatBody: React.FC<ChatBodyProps> = () => {
    return (
      <div>
      </div>
    );
  };
  
  export default ChatBody;
  
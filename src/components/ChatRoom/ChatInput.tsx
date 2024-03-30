import { ReactComponent as EmogiIcon } from "asset/icons/EmogiIcon.svg";
import { ReactComponent as FileInputIcon } from "asset/icons/FileInputIcon.svg";
import { ReactComponent as AudioIcon } from "asset/icons/AudioIcon.svg";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { flexCenter } from "styles/CommonStyle";
import { Chat, User } from "types/ChatData";

interface ChatInputProps {
  setChatData: Dispatch<SetStateAction<Chat>>;
  me: User;
}
function ChatInput({ setChatData, me }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDownInputValue = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      // isComposing 이 true 이면
      return; // 조합 중이므로 동작을 막는다.
    }

    if (e.key === "Enter" && !e.shiftKey) {
      handleInputSubmit(e);
    }
  };
  const handleChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    handleResizeHeight();
  };

  const handleInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setChatData((prev: Chat) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          id: Date().toString(),
          senderId: me.id,
          text: inputValue,
          createdAt: Date().toString(),
        },
      ],
    }));

    setInputValue("");
  };

  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    if (!textArea.current) {
      return;
    }
    textArea.current.style.height = "auto"; //height 초기화
    textArea.current.style.height = textArea?.current?.scrollHeight + "px";
  };

  return (
    <ChatInputWrapper onSubmit={handleInputSubmit}>
      <button type="button">
        <FileInputIcon alt="파일 첨부 아이콘" />
      </button>
      <button type="button">
        <AudioIcon alt="음성 텍스트 입력 아이콘" />
      </button>
      <textarea
        rows={1}
        ref={textArea}
        onKeyDown={handleKeyDownInputValue}
        placeholder="메시지"
        onChange={handleChangeInputValue}
        value={inputValue}
      />
      <button>
        <EmogiIcon className="emogi_icon" alt="이모지 아이콘" />
      </button>
    </ChatInputWrapper>
  );
}

export default ChatInput;

const ChatInputWrapper = styled.form`
  background: var(--gray01);
  box-shadow: 0px -0.33px 0px 0px #a6a6aa;
  ${flexCenter}
  gap : 0.5rem;
  height: 6rem;
  position: relative;

  textArea {
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
    width: 28.3rem;

    max-height: 5rem;
    border-radius: 1.65rem;
    border: 0.1rem solid var(--gray03);
    background: var(--white);
    padding: 0.5rem 4.5rem 0.5rem 1.6rem;
    font-size: 1.7rem;
  }

  textArea::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .emogi_icon {
    position: absolute;
    right: 2.3rem;
    top: 1.5rem;
  }
`;

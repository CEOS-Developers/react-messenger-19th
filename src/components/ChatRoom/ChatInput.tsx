import { ReactComponent as EmogiIcon } from "asset/icons/EmogiIcon.svg";
import { ReactComponent as FileInputIcon } from "asset/icons/FileInputIcon.svg";
import { ReactComponent as AudioIcon } from "asset/icons/AudioIcon.svg";
import { ReactComponent as SendIcon } from "asset/icons/SendIcon.svg";
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

    handleResizeTextAreaHeight();
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

  const handleResizeTextAreaHeight = () => {
    if (!textArea.current) {
      return;
    }
    textArea.current.style.height = "auto"; //height 초기화
    textArea.current.style.height = textArea?.current?.scrollHeight + "px";
  };

  return (
    <ChatInputWrapper onSubmit={handleInputSubmit}>
      <div className="file_audio_button">
        <button type="button">
          <FileInputIcon alt="파일 첨부 아이콘" />
        </button>
        <button type="button">
          <AudioIcon alt="음성 텍스트 입력 아이콘" />
        </button>
      </div>
      <TextAreaWrapper>
        <textarea
          // 초기값은 1줄만
          rows={1}
          ref={textArea}
          onKeyDown={handleKeyDownInputValue}
          placeholder="메시지"
          onChange={handleChangeInputValue}
          value={inputValue}
        />
        <button>
          <EmogiIcon
            type="button"
            className={`emogi_icon ${inputValue && "move_icon"}`}
            alt="이모지 아이콘"
          />
        </button>
      </TextAreaWrapper>
      {inputValue && (
        <button>
          <SendIcon alt="보내기아이콘" />
        </button>
      )}
    </ChatInputWrapper>
  );
}

export default ChatInput;

const ChatInputWrapper = styled.form`
  background: var(--gray01);
  ${flexCenter}
  box-shadow: 0px -0.33px 0px 0px #a6a6aa;
  gap: 0.5rem;
  height: 6rem;
  width: 100%;
  position: relative;

  .file_audio_button {
    ${flexCenter}
    gap: 0.5rem;
  }
`;

const TextAreaWrapper = styled.div`
  ${flexCenter}
  textArea {
    position: relative;
    display: flex;
    justify-content: space-between;
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
    width: 28.3rem;
    height: 100%;

    max-height: 5rem;
    border-radius: 1.65rem;
    border: 0.1rem solid var(--gray03);
    background: var(--white);
    padding: 0.5rem 4.5rem 0.5rem 1.6rem;
    font-size: 1.7rem;
  }

  textarea:not(:placeholder-shown) {
    width: 24.5rem;
  }

  textArea::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .emogi_icon.move_icon {
    right: 5.8rem;
  }

  .emogi_icon {
    position: absolute;
    right: 2.3rem;
    top: 1.5rem;
    transition: 0.2s ease-out;
  }
`;

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

  // shift + enter로 줄 바꿈 기능
  const handleKeyDownShiftEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      // isComposing 이 true 이면
      return; // 조합 중이므로 동작을 막는다.
    }

    if (e.key === "Enter" && !e.shiftKey) {
      handleInputSubmit(e);
    }
  };

  // textarea를 제어 컴포넌트로 ~
  const handleChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    handleResizeTextAreaHeight();
  };

  // 엔터나 보내기 버튼 클릭 시 배열에 저장
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
          // me가 보내는 사람임
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
    // 스크롤이 생길 경우, textarea의 height를 늘려줌 => 특정 Height 이상 늘어나지 못하게 max-height를 css에 지정해줌
    textArea.current.style.height = textArea?.current?.scrollHeight + "px";
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click(); // 숨겨진 file input의 클릭 이벤트를 실행
  };

  // 사진 파일 첨부 후 전송
  const fileInputSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFile = e.target.files?.[0];

    if (!targetFile) return;
    const { size, name } = targetFile;

    const url = URL.createObjectURL(targetFile);

    setChatData((prev: Chat) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          id: Date().toString(),
          senderId: me.id,
          createdAt: Date().toString(),
          photo: { name, url, size },
        },
      ],
    }));
  };

  return (
    <ChatInputWrapper onSubmit={handleInputSubmit}>
      <div className="file_audio_button">
        <button type="button" onClick={handleFileButtonClick}>
          <FileInputIcon alt="파일 인풋 아이콘" />
          <input
            ref={fileInputRef}
            id="fileInput"
            // 파일 인풋을 숨기고, 파일 아이콘 클릭 시 파일 첨부창이 뜨게 함
            style={{ display: "none" }}
            type="file"
            accept=".jpg, .png"
            onChange={fileInputSubmit}
          />
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
          onKeyDown={handleKeyDownShiftEnter}
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

    max-height: 5rem; /* max-height 이상 늘어나지 않게 */
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
    transition: 0.1s ease-out;
  }
`;

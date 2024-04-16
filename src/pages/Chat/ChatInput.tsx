import styled from "styled-components"
import { css } from "styled-components"
import addIcon from "../../assets/icons/add.png"
import cameraIcon from "../../assets/icons/camera.png"
import galleryIcon from "../../assets/icons/gallery.png"
import recordIcon from "../../assets/icons/record.png"
import stickerIcon  from "../../assets/icons/sticker.png"


interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  addChatData: (value: string) => void;
}



function ChatInput({addChatData, value, setValue}:Props) {
const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setValue(e.target.value);
}

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if(!value.trim()){
      alert('텍스트를 입력 해 주세요')
  }
    else{
      addChatData(value);
      setValue("");
    }
  }


  return (
    <ChatInputWrapper>
      <AddIcon><img src={addIcon}/> </AddIcon>
      <CameraIcon><img src={cameraIcon}/></CameraIcon>
      <GalleryIcon><img src={galleryIcon}/></GalleryIcon>

      
      <InputFiledWrapper  onSubmit={onSubmit}>
        <InputFiled 
        placeholder="Aa"
        onChange = {onChange}
        value={value}
        />
        
        <StickerIcon type="button"><img src = {stickerIcon}/></StickerIcon>
      </InputFiledWrapper>

      <RecordIcon><img src={recordIcon}/></RecordIcon>
    </ChatInputWrapper>
  )
}

const ChatInputWrapper = styled.div`
    width: 100%;
    height:49px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

//텍스트 입력창
const InputFiledWrapper = styled.form`
  border: 0.7px solid black;
  width: 199px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

//개행만 가능 (협의 예정)
const InputFiled = styled.input`
  width: 148.7px;
  margin-left: 16.03px;
  margin-right: 10px;
  padding: 0;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  &::placeholder {
    color: ${({theme})=> theme.colors.grey2};
  }

`
const StickerIcon = styled.button`
    width: 18px;
    height: 18px;
    border: none;
    background-color: white;
    
    img{
        width: 18px;
        height: 18px;
    }
    cursor: pointer;
`


//하단 아이콘
const ChatInputIconsStyle = css`
    width: 24px;
    height: 24px;
    border: none;
    background-color: white;

    img{
        width: 24px;
        height: 24px;
    }
    cursor: pointer;
`
//png사이즈 차이로 스타일 따로 줌
const AddIcon = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: white;
  margin-left: 10px;
  img{
        width: 16px;
        height: 16px;
    }
    cursor: pointer;
`
const CameraIcon = styled.button`
  ${ChatInputIconsStyle}
`
const GalleryIcon = styled.button`
  ${ChatInputIconsStyle}
`
const RecordIcon = styled.button`
  ${ChatInputIconsStyle}
`

export default ChatInput
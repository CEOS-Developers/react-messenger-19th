import styled from "styled-components";

// image
import smallAdd from "../../assets/smallAdd.svg";
import emoji from "../../assets/emoji.svg";
import voice from "../../assets/voice.svg";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Main = () => {
  return (
    <Wrapper>
      <div>안녕</div>
      <InputWrapper>
        <img src={smallAdd} />
        <Input>
          <InputText placeholder="메시지"></InputText>
          <img src={emoji} />
          <img src={voice} />
        </Input>
      </InputWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 42.45rem;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: auto;
  margin-bottom: 2.125rem;
  height: 3rem;
  align-items: center;
`;

const Input = styled.span`
  display: flex;
  height: 2.25rem;
  padding: 0.625rem 0.75rem;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  border-radius: 5rem;
  border: 1px solid ${colors.gray300};
`;

const InputText = styled.input`
  display: -webkit-box;
  width: 14.3125rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex-shrink: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  ${colors.black}

  ${typography.body2}
  &::placeholder {
    ${colors.gray300}
  }
`;

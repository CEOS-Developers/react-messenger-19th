import styled from "styled-components";
import { colors } from "../../style/colors";
import { typography } from "../../style/typography";
import xmark from "../../assets/xmark.svg";
import LinkItem from "./LinkItem";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import behance from "../../assets/behance.svg";

const linkData = [
  {
    id: "instagram",
    icon: instagram,
    userId: "@iam_mang9",
    link: "https://www.instagram.com/daisy.won/",
  },
  {
    id: "github",
    icon: github,
    userId: "mang9@gmail.com",
    link: "https://github.com/jiwon010330",
  },
  {
    id: "behance",
    icon: behance,
    userId: "mang9@gmail.com",
    link: "https://www.behance.net",
  },
];

const Main = () => {
  return (
    <Wrapper>
      <IntroWrapper>
        <div>
          <Message>안녕하세요!</Message>
          <TimeLeft>삭제까지 22시간</TimeLeft>
        </div>
        <img src={xmark} />
      </IntroWrapper>
      <LinkWrapper>
        <Title>Links</Title>
        <LinkBox>
          {linkData.map((el) => (
            <LinkItem icon={el.icon} userId={el.userId} link={el.link} />
          ))}
        </LinkBox>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IntroWrapper = styled.div`
  margin-top: 5.56rem;
  display: flex;
  width: 22rem;
  padding: 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.gray100};
  border-radius: 0.75rem;
`;

const Message = styled.h3`
  ${typography.body2}
`;
const TimeLeft = styled.span`
  ${typography.caption};
  color: ${colors.gray300};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 0 1rem;
`;

const Title = styled.h3`
  padding: 0.75rem 0;
  ${typography.title2}
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";
import { colors } from "../../style/colors";

interface LinkItemProps {
  icon: string;
  userId: string;
  link: string;
}

const LinkItem = ({ icon, userId, link }: LinkItemProps) => {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <Wrapper>
      <img src={icon} />
      <UserId>{userId}</UserId>
      <LinkBtn onClick={handleClick}>바로 가기</LinkBtn>
    </Wrapper>
  );
};

export default LinkItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  padding: 0.75rem 2rem 0.75rem 0rem;
  align-items: center;
  gap: 0.81rem;
  justify-content: start;
  width: 23.4375rem;
`;

const UserId = styled.span`
  color: ${colors.gray300};
  font-family: "Spoqa Han Sans Neo";
`;

const LinkBtn = styled.button`
  display: flex;
  padding: 0.25rem 0.4375rem;
  align-items: center;
  color: ${colors.gray300};
  border-radius: 1.25rem;
  background: ${colors.gray200};
  width: 4rem;
  margin-left: auto;
`;

import styled from 'styled-components';

const StyledProfileBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function ProfileBody() {
  return (
    <StyledProfileBody className="scroll-box">
      This is ProfileBody
    </StyledProfileBody>
  );
}

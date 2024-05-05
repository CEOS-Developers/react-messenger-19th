import styled from 'styled-components';
import TabBar from '@components/non-fixed/TabBar/TabBar';
import { Link } from 'react-router-dom';

const StyledNotFoundContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function NotFound() {
  return (
    <>
      <StyledNotFoundContainer className="scroll-box">
        This is not found page.Go back to home page
        <Link to="/">Go to home page</Link>
      </StyledNotFoundContainer>
      <TabBar />
    </>
  );
}

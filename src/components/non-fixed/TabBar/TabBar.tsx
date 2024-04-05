import TabIconContainer from '@components/non-fixed/TabBar/TabIconContainer';
import BlankSpace from '@components/non-fixed/TabBar/BlankSpace';

import styled from 'styled-components';

const StyledTabBar = styled.footer`
  height: 89px;
  background-color: ${(props) => props.theme.color.grayLight};
  display: flex;
  flex-direction: column;
`;

export default function TabBar() {
  return (
    <StyledTabBar>
      <TabIconContainer />
      <BlankSpace />
    </StyledTabBar>
  );
}

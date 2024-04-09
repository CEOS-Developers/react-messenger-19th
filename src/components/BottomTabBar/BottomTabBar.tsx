import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StatusGray from '../../assets/img/status-gray.svg';
import StatusGreen from '../../assets/img/status-green.svg';
import Calls from '../../assets/img/calls-gray.svg';
import Camera from '../../assets/img/camera-gray.svg';
import ChatsGray from '../../assets/img/chats-gray.svg';
import ChatsGreen from '../../assets/img/chats-green.svg';
import Settings from '../../assets/img/settings-gray.svg';

const TabBarContainer = styled.div`
  width: 23.4375rem;
  height: 3.06rem;
  border-top: 0.03125rem #a4a39e;
  position: relative;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  width: 4.6875rem;
  height: 3.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const IconImg = styled.img`
  width: auto;
  height: auto;
  position: absolute;
`;

const Text = styled.div<TextProps>`
  color: ${(props) => (props.$active ? '#1BD742' : 'rgba(84, 84, 88, 0.65)')};
  text-align: center;
  font-family: 'SF Pro Text';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.00625rem;

  position: absolute;
  top: 2.19rem;
`;

interface TextProps {
  $active?: boolean;
}

export default function BotttomTabBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName); // 클릭한 탭으로 activeTab 상태 업데이트
    if (tabName === 'Status') {
      navigate('/status');
    } else if (tabName === 'Chats') {
      navigate('/chats');
    }
  };

  return (
    <TabBarContainer>
      <IconContainer onClick={() => handleTabClick('Status')}>
        <IconImg
          style={{ top: '0.42rem' }}
          src={activeTab === 'Status' ? StatusGreen : StatusGray}
          alt="Status 아이콘"
        />
        <Text $active={activeTab === 'Status'}>Status</Text>
      </IconContainer>
      <IconContainer>
        <IconImg style={{ top: '0.43rem' }} src={Calls} alt="Calls 아이콘" />
        <Text>Calls</Text>
      </IconContainer>
      <IconContainer>
        <IconImg style={{ top: '0.48rem' }} src={Camera} alt="Camera 아이콘" />
        <Text>Camera</Text>
      </IconContainer>
      <IconContainer onClick={() => handleTabClick('Chats')}>
        <IconImg
          style={{ top: '0.56rem' }}
          src={activeTab === 'Chats' ? ChatsGreen : ChatsGray}
          alt="Chats 아이콘"
        />
        <Text $active={activeTab === 'Chats'}>Chats</Text>
      </IconContainer>
      <IconContainer>
        <IconImg
          style={{ top: '0.39rem' }}
          src={Settings}
          alt="Settings 아이콘"
        />
        <Text>Settings</Text>
      </IconContainer>
    </TabBarContainer>
  );
}

import styled from 'styled-components';
import TopNavBar from '../TopNavBar/TopNavBar';
import Edit from '../../assets/img/edit.svg';

export default function ContactNavBar() {
  return <TopNavBar leftText="Edit" rightImgSrc={Edit} title="Chats" />;
}

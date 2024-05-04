import { UserData } from '../../../lib/data';
import * as U from './UserList.style';

export default function UserList(): JSX.Element {
	return (
		<>
			<U.Wrapper>
				<U.HeaderBar>
					<U.Icon src="/icon/userSearch.svg" />
					<U.Icon src="/icon/addUser.svg" />
					<U.Icon src="/icon/alarm.svg" />
				</U.HeaderBar>

				<U.MyProfileContainer>
					<U.MyProfilePhoto src="/main/MyProfile.png" />

					<U.ProfileTextContainer>
						<U.MyName>김동혁</U.MyName>
						<U.MyStatusMessage>상태메세지 입력</U.MyStatusMessage>
					</U.ProfileTextContainer>
				</U.MyProfileContainer>

				<U.SubTab>
					<U.SubText>서비스</U.SubText>
					<U.MoreIcon src="/icon/More.svg" />
				</U.SubTab>

				<U.SubTab>
					<U.SubText>그룹</U.SubText>
					<U.MoreIcon src="/icon/More.svg" />
				</U.SubTab>

				{/* 친구 목록 */}
				<U.FriendList>
					<U.SubTab>
						<U.SubText>친구</U.SubText>
						<U.MoreIcon src="/icon/More.svg" />
					</U.SubTab>

					<U.RecommandFriendContainer>
						<U.Circle>
							<U.Profile src="/icon/Character.svg"></U.Profile>
						</U.Circle>
						<U.InnerDiv>
							<U.Text>친구 추천</U.Text>
							<img src="/icon/rightArrow.svg" />
						</U.InnerDiv>
					</U.RecommandFriendContainer>

					{UserData.map((el, index) => (
						<U.PrivateFriend key={index}>
							<img src="/icon/defaultFriendProfile.svg" />
							<U.Text>{el.name}</U.Text>
						</U.PrivateFriend>
					))}
				</U.FriendList>
			</U.Wrapper>
		</>
	);
}

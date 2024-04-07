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
					<U.MyProfilePhoto />

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

				<U.SubTab>
					<U.SubText>친구</U.SubText>
					<U.MoreIcon src="/icon/More.svg" />
				</U.SubTab>
			</U.Wrapper>
		</>
	);
}

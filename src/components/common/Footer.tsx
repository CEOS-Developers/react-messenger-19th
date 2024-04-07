import styled from 'styled-components';

export default function Footer(): JSX.Element {
	return (
		<>
			<Wrapper>
				<FooterBar src="/icon/Footer.png" />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	height: 30px;
	padding-bottom: 6px;

	justify-content: center;
	align-items: end;

	@media (max-width: 768px) {
		display: none;
	}
`;

const FooterBar = styled.img``;

import styled from 'styled-components';
import Footer from './Footer';
import FooterMenu from './FooterMenu';
import { useLocation } from 'react-router-dom';

export default function MergeFooter(): React.ReactNode {
	const location = useLocation();
	const paths = ['/ChatRoom', '/ChatRoom/'];

	// 현재 경로가 paths 배열에 포함되어 있으면 null을 반환
	if (paths.includes(location.pathname)) {
		return null;
	}

	return (
		<div>
			<MainFooter>
				<FooterMenu currentPath={location.pathname} />
				<Footer />
			</MainFooter>
		</div>
	);
}

const MainFooter = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
`;

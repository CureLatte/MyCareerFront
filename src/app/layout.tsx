import './no.css';
import StyledComponentsRegistry from '../lib/registry';
import BaseLayOut from '@/pages/BaseLayOut';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<BaseLayOut lang="ko">{children}</BaseLayOut>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}

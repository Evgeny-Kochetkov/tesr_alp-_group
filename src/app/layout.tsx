import type { Metadata } from 'next'

import localFont from 'next/font/local'

import { GlobalStyle } from '@/globalStyle'
import StyledComponentsRegistry from './registry'

import { ReduxProvider } from '@/redux/provider'

import { Layout } from '@/components/layout'

const montserrat = localFont({
	src: [
		{
			path: '../../public/fonts/Montserrat-Bold.woff2',
			weight: 'bold',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Montserrat-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Montserrat-Regular.woff2',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Montserrat-SemiBold.woff',
			weight: '600',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Montserrat-SemiBoldItalic.woff2',
			weight: '600',
			style: 'italic'
		},
		],
	variable: '--font-montserrat'
})

export const metadata: Metadata = {
	title: 'KapibaraLab',
	description: 'KapibaraLab',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<StyledComponentsRegistry>
				<GlobalStyle/>
				<body className={`${montserrat.variable}`}>
					<ReduxProvider>
						<Layout>
							{children}
						</Layout>
					</ReduxProvider>
				</body>
			</StyledComponentsRegistry>
		</html>
	)
}

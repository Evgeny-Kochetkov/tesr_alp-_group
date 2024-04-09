import { MainScreen } from '@/components/common/mainScreen'
import { Laboratory } from '@/components/common/laboratory'
import { Gallery } from '@/components/common/gallery'

export default async function Home() {
	return (
		<main>
			<MainScreen/>
			<section style={{'padding': '96px 260px'}}>
				<p style={{'textAlign': 'center', 'fontSize': '24px', 'fontWeight' : '600', 'fontStyle' : 'italic'}}>
					Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!
				</p>
			</section>
			<Laboratory/>
			<Gallery/>
		</main>
	)
}
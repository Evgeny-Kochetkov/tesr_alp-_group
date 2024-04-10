import { MainScreen } from '@/components/common/mainScreen'
import { DescrSection } from '@/components/common/descrSection'
import { Laboratory } from '@/components/common/laboratory'
import { Gallery } from '@/components/common/gallery'
import { MainForm } from '@/components/common/mainForm'

export default async function Home() {
	return (
		<main>
			<MainScreen/>
			<DescrSection/>
			<Laboratory/>
			<Gallery/>
			<MainForm/>
		</main>
	)
}
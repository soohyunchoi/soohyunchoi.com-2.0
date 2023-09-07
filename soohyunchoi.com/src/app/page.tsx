import { NavBar } from '../components/navbar'
import ScrollIndicator from '../components/scrollindicator'
import AboutSection from './(sections)/aboutsection'
import TitleCard from './(sections)/titlecard'

export default function Home() {
  return (
	<main className="bg-white flex min-h-screen flex-col items-center justify-between p-16 w-screen ">
		<TitleCard/>
		<AboutSection/>
		<ScrollIndicator/>
	</main>
  )
}
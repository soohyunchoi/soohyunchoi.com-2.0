import AboutSection from './(sections)/aboutsection'
import BioSection from './(sections)/biosection'
import TitleCard from './(sections)/titlecard'

export default function Home() {
  return (
	<main className="bg-white flex min-h-screen flex-col items-center justify-between p-16">
		<TitleCard/>
		<AboutSection/>
		<BioSection/>
	</main>
  )
}
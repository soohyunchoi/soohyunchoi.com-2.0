import { NavBar } from './components/navbar'
import ScrollIndicator from './components/scrollindicator'
import TitleCard from './sections/titlecard'

export default function Home() {
  return (
	<main className="bg-white flex min-h-screen flex-col items-center justify-between p-16">
		// negative margin on bottom to center relative to the navbar (h-20)
		<div className='-mb-36'>
			<NavBar/>
		</div>
		<TitleCard/>
		<TitleCard/>
		<ScrollIndicator/>
	</main>
  )
}
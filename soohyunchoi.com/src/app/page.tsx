import Image from 'next/image'
import TypeWriter from './components/typewriter'
import { NavBar } from './components/navbar'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-16">
        <NavBar/>
        <div className="flex flex-col items-start text-black space-y-3 font-serif justify-end w-152">
            <h1 className="text-7xl font-extralight">
                <span className="font-light"> Hey! I'm </span> <span className="font-sans">Soohyun.</span>
            </h1>
            <h1 className="text-7xl font-extralight">
                <span className="font-light"> I build </span>
                <TypeWriter words={['accessible', 'scalable', 'reliable', 'inclusive']} delay={1500} />
            </h1>
            <h1 className="text-7xl font-extralight">
                <span className="font-light"> software.</span>
            </h1>
        </div>
    </main>
  )
}

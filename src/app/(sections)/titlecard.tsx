'use client';
import TypeWriter from '../../components/typewriter'
import { useRef } from "react";

export default function TitleCard() {
	const ref = useRef(null);
	return (
			<section id='title' className="flex flex-col items-start text-black font-serif justify-center w-256 h-screen -mt-32 mb-32 space-y-3">
				<h1 className="text-8xl font-extralight z-20">
					<span className="font-light"> Hey! I'm </span> <span className="font-sans z-20">Soohyun. </span>
				</h1>
				<h1 className="text-8xl font-extralight">
					<span className="font-light"> I build </span>
					<TypeWriter words={['scalable', 'reliable', 'inclusive']} delay={1500} />
				</h1>
				<h1 className="text-8xl font-extralight">
					<span className="font-light"> software.</span>
				</h1>
			</section>
	);
}
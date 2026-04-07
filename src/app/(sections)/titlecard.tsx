'use client';
import TypeWriter from '../../components/typewriter'
import { motion, Variants } from "framer-motion";

const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 }
	}
};

const popIn: Variants = {
	hidden: { opacity: 0, y: 28, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
			y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
			scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
		}
	}
};

export default function TitleCard() {
	return (
		<motion.section
			id='title'
			className="flex flex-col items-start text-black font-serif justify-center w-256 h-screen -mt-32 -mb-16 space-y-3"
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, margin: "0px 0px -60px 0px" }}
		>
			<motion.h1 className="text-8xl font-extralight z-20" variants={popIn}>
				<span className="font-light"> Hey! I'm </span> <span className="font-sans z-20">Soohyun. </span>
			</motion.h1>
			<motion.h1 className="text-8xl font-extralight" variants={popIn}>
				<span className="font-light"> I build </span>
				<TypeWriter words={['scalable', 'robust', 's.o.t.a.', 'impactful', 'fast']} delay={1500} />
			</motion.h1>
			<motion.h1 className="text-8xl font-extralight" variants={popIn}>
				<span className="font-light"> software.</span>
			</motion.h1>
		</motion.section>
	);
}
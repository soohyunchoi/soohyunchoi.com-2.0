import 'remixicon/fonts/remixicon.css';
import { ABOUT_SECTION_CONTENT } from '@/app/constants';
import { IconFooter } from '../(sections)/aboutsection';

interface BioCardProps {
	img: string;
	label: string;
	icon: string;
	color?: string;
}

export const BIO_SECTION_CONTENT: BioCardProps[] = [
	{
		img: '/assets/images/2.0/surfing.jpg/',
		label: 'checking the waves',
		icon: 'ri-surf-line',
	}
]

export default function AboutSection() {
	return (
		<div className="text-black grid grid-cols-2 h-screen w-full">
			<TitleColumn/>
			<BioColumn/>
		</div>
	);
}

function BioColumn() {
	return (
		<div className='flex flex-col justify-center w-full'>
			<BioPicture src='/assets/images/2.0/surfing.jpg/'/>
		</div>
	);
}

export interface JobCardProps {
	startDate: Date;
	endDate?: Date;
	company: string;
	position: string;
	description: string;
	technologies: string[];
	logo: string;
}
function TitleColumn() {
	return (
		<div className='w-full pr-32 relative flex flex-col justify-center'>
			<div className='flex flex-col space-y-5'>

				<h1 className="font-sans font-medium text-6xl">
					<span className='italic'>
						Right now, I'm <br/>
					</span>
					<span className='font-serif font-medium text-7xl'>
						checking the waves
					</span>
				</h1>

				<div className="font-serif font-light text-xl space-y-5">

					<p>
					People call me Sush. I graduated from UC Santa Barbara (go Gauchos!) with a bachelor's in Computer Science.
					</p>

					<p>
					I've always been a builder. I built my first PC when I was in middle school and my first calculator app when I was in elementary school. 
					</p>

					<p>
					Outside of work, I love listening, producing, and spinning house music, snowboarding, surfing, off-roading, golfing, watching movies, and playing Valorant
					</p>

					<p>
					<span className='italic font-sans'>hint:</span> click the icons to try my over designed carousel :)
					</p>
					
				</div>

				<IconFooter/>

			</div>

		</div>
	);
}

interface BioPictureProps {
	className?: string;
	src: string;
}
function BioPicture(props: BioPictureProps) {
	return (
		<div className='h-4/6 w-[22rem] relative overflow-hidden rounded-xl ms-32'>
			<img className='absolute inset-0 w-full h-full object-cover' src={`${props.src}`} alt='sush'/>
		</div>
	);
}
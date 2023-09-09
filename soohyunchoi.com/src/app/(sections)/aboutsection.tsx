import 'remixicon/fonts/remixicon.css';
import { ABOUT_SECTION_CONTENT } from '@/app/constants';

export default function AboutSection() {
	return (
		<div className="text-black grid grid-cols-2 h-screen">
			<TitleColumn/>
			<JobsColumn/>
		</div>
	);
}

function JobsColumn() {
	return (
		<div className='w-full flex flex-col justify-center'>
			{
				ABOUT_SECTION_CONTENT.map((content) => (
					<JobCard
						startDate={content.startDate}
						endDate={content.endDate}
						company={content.company}
						position={content.position}
						description={content.description}
						technologies={content.technologies}
						logo={content.logo}
					/>
				))
			}
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
function JobCard(props: JobCardProps) {
	return (
		<div className='w-full flex flex-row font-serif space-x-8 py-5'>
			{/*left column (date, duration, logo) */}
			<div className='flex flex-col items-end place-content-between basis-1/4'>
                <div className='text-right'>
                    <h3>Jun 2021 - Oct 2021</h3>
                    <h3>5 mo</h3>
                </div>
                <div>
				    <img className='object-scale-down h-16 mb-4' src={props.logo}></img>
                    {/* for alignment purposes */}
                    <div className='invisible'>
                        <TechnologyBadge technology={'.'} />
                    </div>
                </div>
			</div>

			{/* right column (title, description, technologies) */}
			<div className='basis-3/4'>
				<h1 className='text-2xl font-medium'>
                    {props.position} 
                    <span className='text-xl font-light'> // </span> 
                    {props.company}
                </h1>
				<h2 className='text-xl font-light'></h2>
				<p className='text-lg font-light'>{props.description}</p>
					<div className='flex flex-row space-x-2 pt-2'>
						{
							props.technologies.map((technology) => (
								<TechnologyBadge technology={technology} />
							))
						}
					</div>
			</div>
		</div>
	);
}

interface TechnologyBadgeProps {
    technology: string;
    className?: string;
}
function TechnologyBadge(props: TechnologyBadgeProps) {
    return (
        <div className={`px-2 rounded-full text-lg font-light border border-black ${props.className}`}>
            <p className='text-lg font-light'>{props.technology}</p>
        </div>
    );
}

function TitleColumn() {
	return (
		<div className='w-full pr-32 relative flex flex-col justify-center'>
			<div className='flex flex-col space-y-1.5'>
				<h1 className="font-sans italic font-medium text-6xl">
					Right now, I'm a
				</h1>

				<h1 className="font-serif font-medium text-7xl">
					Junior Software
				</h1>
				<h1 className="font-serif font-medium text-7xl">
					Developer
					<span className="font-extralight"> at </span>
				</h1>
				<h1 className="font-serif font-medium text-7xl">
					Amazon
				</h1>
			</div>
			<IconFooter/>
		</div>
	);
}

export function IconFooter() {
	return (
		<div className='flex flex-row text-2xl absolute bottom-10 left-0 space-x-2'>
			<IconLink icon='ri-linkedin-line'/>
			<IconLink icon='ri-github-line'/>
			<IconLink icon='ri-twitter-x-line'/>
		</div>
	);
}

interface IconLinkProps {
	icon: string;
}

function IconLink(props: IconLinkProps) {
	return (
		<i className={`hover:animate-bounce ${props.icon}`}></i>

	);
}
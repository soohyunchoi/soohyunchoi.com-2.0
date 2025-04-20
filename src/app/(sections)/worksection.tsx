import 'remixicon/fonts/remixicon.css';
import { ABOUT_SECTION_CONTENT, LINKS } from '@/app/constants';
import { motion, Variants } from "framer-motion";

export default function WorkSection() {
	return (
		<section id="work" className="text-black grid grid-cols-2 pt-48">
			<TitleColumn/>
			<JobsColumn/>
		</section>
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
    function monthsBetweenDates(start: Date, end: Date) {
        const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        return `${years > 0 ? years + ' yr ' : ''}${months} mo`;
    }
    function formatDateToMonthYear(date: Date): string {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
    }
	return (
		<div className='w-full flex flex-row font-serif space-x-8 py-5'>
			{/*left column (date, duration, logo) */}
			<div className='flex flex-col items-end place-content-between basis-1/4'>
                <div className='text-right'>
                    <h3>{formatDateToMonthYear(props.startDate)} - {props.endDate ? formatDateToMonthYear(props.endDate) : 'Present'}</h3>
                    <h3>{monthsBetweenDates(props.startDate, props.endDate ?? new Date())}</h3>
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
        <div className={`cursor-default px-2 rounded-full text-lg font-light border border-black ${props.className}`}>
            <p className='text-lg font-light'>{props.technology}</p>
        </div>
    );
}

function TitleColumn() {
	return (
        <div>
            <div className='w-full pr-32 sticky top-1/4'>
                <div className='flex flex-col space-y-1.5'>
                    <h1 className="font-sans italic font-medium text-6xl">
                        Right now, I'm a
                    </h1>

                    <h1 className="font-serif font-medium text-7xl">
                        Software
                    </h1>
                    <h1 className="font-serif font-medium text-7xl">
                        Development
                    </h1>
                    <h1 className="font-serif font-medium text-7xl">
                        Engineer
                        <span className="font-sans italic font-medium text-6xl"> at </span>
                    </h1>
                    <h1 className="font-serif font-medium text-7xl">
                        Amazon
                    </h1>
                </div>
                <IconFooter/>
            </div>
        </div>
	);
}
interface IconFooterProps {
    className?: string;
}
export function IconFooter(props: IconFooterProps) {
	return (
		<div className={`flex flex-row text-2xl space-x-2 ${props.className} pt-24`}>
			<IconLink icon='ri-linkedin-line' to={LINKS.linkedIn}/>
			<IconLink icon='ri-github-line' to={LINKS.gitHub}/>
			<IconLink icon='ri-twitter-line' to={LINKS.twitter}/>
			<IconLink icon='ri-mail-line' to={LINKS.email}/>
		</div>
	);
}

interface IconLinkProps {
	icon: string,
    to: string
}

function IconLink(props: IconLinkProps) {
    const draw: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            fill: '#FAF0E6',
            transition: {
                pathLength: { type: "spring", duration: 1, bounce: 0 },
                opacity: { duration: 0.01 },
                fill: { duration: 0.7, delay: 0.2, type: 'spring'},
            }
        }
    };
    const buttons: Variants = {
        hidden: {
            y: '0px',
        },
        visible: {
            y: '-6px',
            transition: {
                y: {
                    type: "spring",
                    damping: 20,
                    stiffness: 400
                }
            }
        }
    };

	return (
        <div>
            <motion.div
                whileHover="visible"
                whileTap="visible"
                className='h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'
                initial="hidden"
                variants={buttons}
                onClick={(e) => {
                    e.preventDefault(); // prevent default browser behavior
                    window.open(props.to, "_blank");
                }}
            >
                <motion.svg

                    className="absolute"
                    width="60"
                    height="60"
                >
                <motion.circle
                    cx="30"
                    cy="30"
                    r="20"
                    stroke="#111"
                    strokeWidth="1.5"
                    fill="#FFF"
                    variants={draw}
                />
                </motion.svg>
                <motion.i className={`relative ${props.icon}`}/>

            </motion.div>
        </div>
	);
}
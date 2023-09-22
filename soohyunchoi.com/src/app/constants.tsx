import AboutSection, { JobCardProps } from "./(sections)/worksection";

interface BioCardProps {
	img: string,
	label: string,
	icon?: string,
	color?: string,
    secondaryColor?: string,
}
export const BIO_SECTION_CONTENT: BioCardProps[] = [
	{
		img: '/assets/images/2.0/surfing.jpg/',
		label: 'checking the waves',
		icon: 'ri-haze-line',
        color: '#5CD2E6',
        secondaryColor: '#9fd9e3',
	},
	{
		img: '/assets/images/2.0/djing.jpg/',
		label: 'enjoying some house music',
		icon: 'ri-album-fill',
        color: '#5C5470',
        secondaryColor: '#B9B4C7',
	},
	{
		img: '/assets/images/2.0/jeep.jpeg/',
		label: 'offroading to a viewpoint',
		icon: 'ri-bus-2-line',
        color: '#FFB000',
        secondaryColor: '#ffd16b',
	},
    {
        img: '/assets/images/2.0/49.jpg/',
        label: 'spending time with friends',
        icon: 'ri-mental-health-line',
        color: '#9D44C0',
        secondaryColor: '#FFA1F5',
    },
    {
        img: '/assets/images/2.0/fishing.jpg/',
        label: 'trying new things',
        icon: 'ri-anchor-fill',
        color: '#5CD2E6',
        secondaryColor: '#9fd9e3',
    },
    {
        img: '/assets/images/2.0/golf.jpg/',
        label: 'losing golf balls',
        icon: 'ri-crosshair-2-line',
        color: '#285430',
        secondaryColor: '#5F8D4E',
    },
    {
        img: '/assets/images/2.0/snow.jpg/',
        label: 'hunting some powder',
        icon: 'ri-snowy-line',
        color: '#9A3B3B',
        secondaryColor: '#C08261',
    },
]
export const RESUME_LINK: string = 'https://drive.google.com/file/d/10xpyfXO6LJo8GRZ4lJOOOFCHhK1RK5mP/view?usp=sharing';
export const LINKS: any= {
    linkedIn: "https://www.linkedin.com/in/soohyunchoi/",
    gitHub: 'https://github.com/soohyunchoi',
    twitter: 'https://twitter.com/sushchoi',
    email: 'mailto:hello@soohyunchoi.com',
};
export const ABOUT_SECTION_CONTENT: JobCardProps[] = [
    {
        startDate: new Date(2022, 6),
        company: "Amazon",
        position: "Junior Software Developer",
        description: "Designed and implemented AI NLU tools, streamlining \
            workflows and saving over $100,000 monthly. Developed microservices \
            for Alexa, handling 4,500+ queries/second using advanced NLU and \
            knowledge graphs. Engineered robust API endpoints on AWS, ensuring \
            optimal user latency. Crafted frontend components in React and \
            Typescript, enhancing debugging visibility and reducing issue \
            identification time by 90%. Researched state-of-the-art LLM \
            grounding techniques.",
        technologies: ["PHP", "React", "AWS", "Typescript"],
        logo: "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1612205615891?e=1701907200&v=beta&t=Iw9xHQ0dqrYiF_N9ck2_-cktalalJzNhJ48_SWyuYZc"
    },
    {
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 10),
        company: "Duffl",
        position: "iOS Engineer",
        description: "Developed an iOS app using SwiftUI and UIKit, converting \
            25k+ monthly web orders to $300k+ revenue with a team of two. \
            Integrated with a RESTful backend for business logic and database \
            interactions. Constructed primary pages and reusable UI components, \
            ensuring extensibility.",
        technologies: ["SwiftUI", "Swift", "Django"],
        logo: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/309987044_469918101823936_835612425203704977_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=G_Nd9SCJhM4AX8uvdN8&_nc_ht=scontent-lax3-1.xx&oh=00_AfCGcmfiEGa0ea4Ar14BiUdl9gyLiFChMLAMzbsAT3Q31A&oe=6512795F"
    },
    {
        startDate: new Date(2020, 11),
        endDate: new Date(2021, 6),
        company: "SB Hacks",
        position: "Frontend Developer",
        description: "Developed a single-page pre-event website using Tailwind, \
            Nunjucks, and PostCSS, hosted on Netlify. Attracted 450+ student \
            participants, sponsors, and mentors. Collaborated remotely with a \
            dedicated team of UC Santa Barbara engineering and marketing students.",
        technologies: ["Tailwind", "PostCSS", "HTML"],
        logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/477/005/datas/original.png"
    },
];
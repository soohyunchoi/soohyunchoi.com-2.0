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
		img: '/assets/images/2.0/dive.webp',
		label: 'playing in the ocean',
		icon: 'ri-pulse-line',
        color: '#43545c',
        secondaryColor: '#7798a6',
	},
	{
        img: '/assets/images/2.0/djing.webp',
		label: 'enjoying some house music',
		icon: 'ri-album-fill',
        color: '#5C5470',
        secondaryColor: '#B9B4C7',
	},
    {
        img: '/assets/images/2.0/surfing.webp',
        label: 'checking the waves',
        icon: 'ri-anchor-fill',
        color: '#5CD2E6',
        secondaryColor: '#9fd9e3',
    },
    {
        img: '/assets/images/2.0/golf.webp',
        label: 'losing golf balls',
        icon: 'ri-crosshair-2-line',
        color: '#285430',
        secondaryColor: '#5F8D4E',
    },
    {
        img: '/assets/images/2.0/rinjani.webp',
        label: 'getting uncomfortable',
        icon: 'ri-rocket-line',
        color: '#ffd70f',
        secondaryColor: '#eddc87',
    },
	{
		img: '/assets/images/2.0/jeep.webp',
		label: 'finding the spot',
		icon: 'ri-bus-2-line',
        color: '#FFB000',
        secondaryColor: '#ffd16b',
	},
    {
        img: '/assets/images/2.0/49.webp',
        label: 'spending time with friends',
        icon: 'ri-mental-health-line',
        color: '#9D44C0',
        secondaryColor: '#FFA1F5',
    },
    {
        img: '/assets/images/2.0/costarica.webp',
        label: 'exploring things & places',
        icon: 'ri-anchor-fill',
        color: '#5CD2E6',
        secondaryColor: '#9fd9e3',
    },
    {
        img: '/assets/images/2.0/bali_fisher.webp',
        label: 'experiencing people',
        icon: 'ri-heart-line',
        color: '#ff7e14',
        secondaryColor: '#c9966d',
    },
    {
        img: '/assets/images/2.0/snow.webp',
        label: 'snowboarding the pow',
        icon: 'ri-snowy-line',
        color: '#9A3B3B',
        secondaryColor: '#C08261',
    },
]
export const RESUME_LINK: string = 'https://drive.google.com/file/d/1bOvOgtbNfKc1F7BBlcaWZWIXnqfP2sG6/view?usp=sharing';
export const LINKS: any= {
    linkedIn: "https://www.linkedin.com/in/soohyunchoi/",
    gitHub: 'https://github.com/soohyunchoi',
    twitter: 'https://twitter.com/sushchoi',
    email: 'mailto:hello@soohyunchoi.com',
};
export const ABOUT_SECTION_CONTENT: JobCardProps[] = [
    {
        startDate: new Date(2022, 6),
        company: "Amazon AGI",
        position: "Software Engineer",
        description: "Research and develop state-of-the-art LLM RAG techniques. \
	    Designed and implemented AI NLU tools, streamlining \
            workflows and saving $100,000+ monthly. Developed microservices \
            for Alexa, handling 4,500+ queries/second using advanced NLU and \
            knowledge graphs with optimized latency at scale.",
        technologies: ["Java", "LLM-RAG", "AWS", "PySpark", "Sys Design"],
        logo: "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1630640869849/amazon_logo?e=2147483647&v=beta&t=2vRB20XZOYNtXSr5GHAUUQXXII4lvgcotA2QTMcRHOI"
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
        logo: "https://bookface-images.s3.amazonaws.com/small_logos/8906169a88bda866fc7b928a110627276ee2e93f.png"
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

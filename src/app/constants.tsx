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
		label: 'bringing my cam everywhere',
		icon: 'ri-pulse-line',
        color: '#43545c',
        secondaryColor: '#7798a6',
	},
	{
        img: '/assets/images/2.0/dj_v2.webp',
		label: 'enjoying some tunes',
		icon: 'ri-album-fill',
        color: '#5C5470',
        secondaryColor: '#B9B4C7',
	},
    {
        img: '/assets/images/2.0/rinjani.webp',
        label: 'trying hard things',
        icon: 'ri-rocket-line',
        color: '#ffd70f',
        secondaryColor: '#eddc87',
    },
    {
        img: '/assets/images/2.0/49.webp',
        label: 'spending time with friends',
        icon: 'ri-mental-health-line',
        color: '#9D44C0',
        secondaryColor: '#FFA1F5',
    },
    {
        img: '/assets/images/2.0/anna.webp',
        label: 'putting on events',
        icon: 'ri-anchor-fill',
        color: '#5CD2E6',
        secondaryColor: '#9fd9e3',
    },
    {
        img: '/assets/images/2.0/bali_fisher.webp',
        label: 'making friends',
        icon: 'ri-heart-line',
        color: '#ff7e14',
        secondaryColor: '#c9966d',
    }
];
export const RESUME_LINK: string = 'https://drive.google.com/file/d/1dwCIBo9f2swiSd8T905KPb60orNUqive/view?usp=sharing';
export const LINKS: any= {
    linkedIn: "https://www.linkedin.com/in/soohyunchoi/",
    gitHub: 'https://github.com/soohyunchoi',
    twitter: 'https://twitter.com/sushchoi',
    email: 'mailto:hello@soohyunchoi.com',
    instagram: 'https://www.instagram.com/sushdawgdumps',
};
export const ABOUT_SECTION_CONTENT: JobCardProps[] = [
    {
        startDate: new Date(2022, 6),
        company: "Amazon AGI",
        position: "Software Engineer",
        description: "Built Knowledge Panels 0→1 — a real-time retrieval system \
            ingesting 125M+ docs/day at 5-min freshness, serving Alexa+, Hyperion, \
            and Nova foundation models via PySpark, OpenSearch, and DynamoDB. \
            Rearchitected ingestion to event-driven, achieving 240x inference \
            reduction and $126K/month in savings. Regionalized from 1→5+ AWS regions. \
            Shipped a sandbox testing framework (18x faster iteration, ~$500K/month saved) \
            and an automated AI eval framework for real-time ground truth accuracy, adopted \
            org-wide by 50+ engineers.",
        technologies: ["RAG", "Python", "AWS", "EMR", "PySpark",  "Kafka", "OpenSearch", "DynamoDB"],
        logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFhA9Zcn70JcQ/company-logo_200_200/B4EZpZ4PjKIoAI-/0/1762444507684/amazonscience_logo?e=1776902400&v=beta&t=PlU9ytie-QlIZQXxqBj6ytE3QbqDJjRg0y2TGaygpzU"
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

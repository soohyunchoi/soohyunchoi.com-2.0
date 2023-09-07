import AboutSection, { JobCardProps } from "./(sections)/aboutsection";
export const ABOUT_SECTION_CONTENT: JobCardProps[] = [
    {
        startDate: new Date(2022, 6),
        company: "Amazon",
        position: "Junior Software Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
        technologies: ["PHP", "React", "AWS", "Typescript"],
        logo: "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1612205615891?e=1701907200&v=beta&t=Iw9xHQ0dqrYiF_N9ck2_-cktalalJzNhJ48_SWyuYZc"
    },
    {
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 10),
        company: "Duffl",
        position: "iOS Engineer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
        technologies: ["SwiftUI", "Swift", "Django"],
        logo: "https://media.licdn.com/dms/image/C4D0BAQHKxqLv8Lds2w/company-logo_200_200/0/1584143907786?e=1701907200&v=beta&t=2Wt74c-DIdx7J9fd-lyQU6Tn57jb0cB4QGFN82UCCPM"
    },
];
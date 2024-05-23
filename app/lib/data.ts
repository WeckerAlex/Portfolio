export const experienceList: Experience[] = [
    {
        name: "Node",
        image: '/nodejsStackedLight.svg'
    },
    {
        name: "HTML5",
        image: '/HTML5_logo.svg'
    },
    {
        name: "CSS3",
        image: '/CSS3_logo.svg'
    },
    {
        name: "JavaScript",
        image: '/JavaScript-logo.png'
    },
    {
        name: "TypeScript",
        image: '/Typescript_logo_2020.svg'
    },
    {
        name: "Java",
        image: '/Java-Logo.svg'
    },
    {
        name: "PHP",
        image: '/php-logo.svg'
    },
    {
        name: "Laravel",
        image: '/laravel.svg'
    },
    {
        name: "Docker",
        image: '/docker-mark-blue.svg'
    },
    {
        name: "Next.js",
        image: '/nextjs-icon-dark-background.svg'
    },
    {
        name: "Swift",
        image: '/Swift_logo_color.svg'
    },
    {
        name: "Cordova",
        image: '/cordova_256.png'
    },
    {
        name: "MySQL",
        image: '/logo-mysql.png'
    },
    {
        name: "CouchDB",
        image: '/couchdb.svg'
    }
]

export const projectList: Project[] = [{
    title: "125 years LAM",
    name: "TimelineProject",
    image: 'LAM_125y.png',
    description: `This website is meant to celebrate the 125th year the LAM exists. Users can look up interesting numbers, directors, sites, formations and expositions.`,
    team: [{
        title: "Developper",
        number: 3
    }, {
        title: "Designer",
        number: 2
    }],
    tech: ["Html", "Css", "Js", "Php", "Laravel", "Mysql"],
    projectLinks: [
        {
            description: "Github",
            url: "https://github.com/WeckerAlex/TimelineProject"
        },
    ]
}, {
    title: "Table Tennis Manager",
    name: "TTManager",
    image: 'TTManager.png',
    description: 'TTManager app is an app which can be used to look up data about table tennis. The users can look up many informations about their played matches and other useful data',
    team: [{
        title: "Developper",
        number: 1
    }],
    tech: ["Swift", "SQLite"],
    projectLinks: [
        {
            description: "Github",
            url: "https://github.com/WeckerAlex/TTManager"
        }
    ]
}]

//Routing and Switching: Connecting Networks
//Routing and Switching: Scaling Networks
//Switching, Routing and Wireless Essentials



export interface Experience {
    name: string
    image: string
}

export interface Project {
    title: string
    name: string
    image: string
    description: string
    team: TeamMember[]
    tech: String[]
    projectLinks?: ProjectLink[]
}
interface TeamMember {
    title: string
    number: number
}
interface ProjectLink {
    description: string,
    url: string
}
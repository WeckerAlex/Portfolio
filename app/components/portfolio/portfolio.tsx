import Certificates from "../certificates/certificate";
import Experiences from "../experience/experience";
import Hero from "../hero/hero";
import Projects from "../projects/projects";
import PageContainer from "./components/PageContainer";

export default function Home() {

    const pages = [
        {
            title: "Home",
            component: <Hero id={"Home"}></Hero>
        },
        {
            title: "Experience",
            component: <Experiences id={"Experience"}></Experiences>
        },
        {
            title: "Projects",
            component: <Projects id={"Projects"}></Projects>
        },
        {
            title: "Certificates",
            component: <Certificates id={"Certificates"}></Certificates>
        },
    ];

    return (
        <PageContainer pages={pages}></PageContainer>
    );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
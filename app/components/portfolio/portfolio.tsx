"use client"

import { useSearchParams } from "next/navigation";
import NavBar from "../App_Bar/App_bar";
import styles from "./portfolio.module.css";
import { useState } from "react";
import Certificates from "../certificates/certificate";
import Experiences from "../experience/experience";
import Hero from "../hero/hero";
import Projects from "../projects/projects";

import { TechExperienceJSON } from "@/app/lib/database/models/techexperience";
import { ProfExperienceJSON } from "@/app/lib/database/models/profexperience";
import { ProjectWithAllJSON } from "@/app/lib/database/models/project";
import { CertificateIssuerWithCertificatesJSON } from "@/app/lib/database/models/certificateissuer";

type Data = {
    experience: {
        tech: TechExperienceJSON[],
        prof: ProfExperienceJSON[]
    };
    projects: ProjectWithAllJSON[];
    certificates: CertificateIssuerWithCertificatesJSON[];
}

export default function Home({ data }: { data: Data }) {

    const navItems = ['Home', 'Experience', 'Projects', 'Certificates'] as const;
    const [page, setPage] = useState<typeof navItems[number]>("Home");
    const searchParamsPage = useSearchParams().get('page')

    if (page !== searchParamsPage) {
        switch (searchParamsPage) {
            case 'Home':
            case 'Experience':
            case 'Projects':
            case 'Certificates':
                setPage(searchParamsPage)
                break;
        }
    }

    const pages = {
        'Home': <Hero id={"Home"}></Hero>,
        'Experience': <Experiences id={"Experience"} data={data.experience}></Experiences>,
        'Projects': <Projects id={"Projects"} data={data.projects}></Projects>,
        'Certificates': <Certificates id={"Certificates"} data={data.certificates}></Certificates>
    }

    return (
        <>
            <header className={styles.header}>
                <NavBar />
            </header>
            <main className={styles.main}>
                {pages[page]}
            </main>
        </>
    );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
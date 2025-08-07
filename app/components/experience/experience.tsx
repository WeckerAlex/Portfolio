import React, { useState } from 'react';
import Section from '../section/section';
import styles from "./experience.module.css";
import TechExperienceList from "./components/TechExperienceList/techExperienceList";
import { Typography } from '@mui/material';
import { TechExperienceJSON } from '@/app/lib/database/models/techexperience';
import { ProfExperienceJSON } from '@/app/lib/database/models/profexperience';
import NavigationTabs from '../navigationTabs/navigationTabs';
import ProfExperience from './components/ProfExperience/profExperience';

interface Props {
    id: string
    data: {
            tech: TechExperienceJSON[],
            prof: ProfExperienceJSON[]
        };
}

const tabs = ["Technical", "Professional"]

const Experience = ({ id, data }: Props) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Section id={id} className={styles.experienceSection}>
            <Typography variant="h5" component="h3">
                <Typography variant="h5" component="span">
                    My&ensp;
                </Typography>
                <Typography variant="h5" color={'primary'} component="span">
                    Experience
                </Typography>
            </Typography>
            <div className={styles.navtabs}>
                <NavigationTabs tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} ></NavigationTabs>
            </div>
            {(tabIndex === 0) ? <TechExperienceList data={data.tech}></TechExperienceList> : null}
            {(tabIndex === 1) ? <ProfExperience data={data.prof}></ProfExperience> : null}

        </Section >
    )
}

export default Experience

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
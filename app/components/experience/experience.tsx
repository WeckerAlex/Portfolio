import React from 'react';
import Section from '../section/section';
import styles from "./experience.module.css";
import TechExperienceList from "./components/TechExperienceList/techExperienceList";
import { Typography } from '@mui/material';
import TechExperienceModel, { TechExperienceJSON } from '@/app/lib/database/models/techexperience';
import ProfExperienceModel, { ProfExperienceJSON } from '@/app/lib/database/models/profexperience';
import ProfExperience from './components/ProfExperience/profExperience';
import TabContainer from './components/TabContainer';
import { Op } from 'sequelize';

interface Props {
    id: string
}

const techExperienceList = await TechExperienceModel.findAll({
    where: {
        skill: {
            [Op.gte]: 50
        }
    },
    order: [['skill', 'DESC']]
});
const profExperienceList = await ProfExperienceModel.findAll()

const techExperienceListJSON: TechExperienceJSON[] = techExperienceList.map(x => x.toJSON())
const profExperienceListJSON: ProfExperienceJSON[] = profExperienceList.map(x => x.toJSON())

const tabs = [{
        title: "Technical",
        tab: <TechExperienceList data={techExperienceListJSON}></TechExperienceList>
    },
    {
        title: "Professional",
        tab: <ProfExperience data={profExperienceListJSON}></ProfExperience>
    }]

const Experience = ({ id }: Props) => {
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
            <TabContainer tabs={tabs}></TabContainer>
        </Section >
    )
}

export default Experience

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
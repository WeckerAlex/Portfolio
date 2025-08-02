import React, { useState } from 'react';
import Section from '../section/section';
import styles from "./experience.module.css";
import ExperienceCard from './components/experienceCard';
import { InputLabel, List, MenuItem, Select,  SelectChangeEvent , Typography } from '@mui/material';
import { ExperienceJSON } from '@/app/lib/database/models/experience';

interface Props {
    id: string
    data: ExperienceJSON[];
}

const SortCriterium = {
    SkillAscending: "Skill(asc)",
    SkillDescending: "Skill(desc)",
    NameAscending: "Name(asc)",
    NameDescending: "Name(desc)"
} as const

type SortCriteria = typeof SortCriterium[keyof typeof SortCriterium]


const Experience = ({ id, data}: Props) => {
    
    const [sortCriterium, setSortCriterium] = useState<SortCriteria>(SortCriterium.SkillDescending);
    
    const handleChange = (event: SelectChangeEvent) => {
        setSortCriterium(event.target.value as SortCriteria);
    };
    let sortedData;
    switch (sortCriterium) {
        case SortCriterium.NameAscending:
            sortedData = data.toSorted((a: ExperienceJSON, b: ExperienceJSON) => (a.name.localeCompare(b.name)));
            break;
        case SortCriterium.NameDescending:
            sortedData = data.toSorted((a: ExperienceJSON, b: ExperienceJSON) => (b.name.localeCompare(a.name)));
            break;
        case SortCriterium.SkillAscending:
            sortedData = data.toSorted((a: ExperienceJSON, b: ExperienceJSON) => (a.skill - b.skill));
            break;
        case SortCriterium.SkillDescending:
            sortedData = data.toSorted((a: ExperienceJSON, b: ExperienceJSON) => (b.skill - a.skill));
            break;
    }

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
            <div className={styles.sortPicker}>
                <InputLabel id="sortby-select-label">Sort by:</InputLabel>
                <Select
                    labelId="sortby-select-label"
                    id="sortby-select"
                    value={sortCriterium}
                    onChange={handleChange}
                >
                    {
                        Object.values(SortCriterium).map(criterium => 
                            <MenuItem key={criterium} value={criterium}>{criterium}</MenuItem>
                        )
                    }
                </Select>
            </div>
            <ul className={styles.experienceList}>
                {
                    sortedData.map(exp =>
                        <li key={exp.name} className={styles.experienceListItem}>
                            <ExperienceCard
                                experience={exp}
                            />
                        </li>
                    )
                }
            </ul>
        </Section >
    )
}

export default Experience

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
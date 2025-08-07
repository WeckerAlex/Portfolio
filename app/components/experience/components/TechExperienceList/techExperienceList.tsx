import React, { useState } from 'react';
import styles from "./techExperienceList.module.css";
import TechExperienceCard from './components/TechExperienceCard/techExperienceCard';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { TechExperienceJSON } from '@/app/lib/database/models/techexperience';

interface Props {
    data: TechExperienceJSON[];
}

const SortCriterium = {
    SkillAscending: "Skill(asc)",
    SkillDescending: "Skill(desc)",
    NameAscending: "Name(asc)",
    NameDescending: "Name(desc)"
} as const

type SortCriteria = typeof SortCriterium[keyof typeof SortCriterium]


const TechExperienceList = ({ data }: Props) => {

    const [sortCriterium, setSortCriterium] = useState<SortCriteria>(SortCriterium.SkillDescending);

    const handleChange = (event: SelectChangeEvent) => {
        setSortCriterium(event.target.value as SortCriteria);
    };
    let sortedData;
    switch (sortCriterium) {
        case SortCriterium.NameAscending:
            sortedData = data.toSorted((a: TechExperienceJSON, b: TechExperienceJSON) => (a.name.localeCompare(b.name)));
            break;
        case SortCriterium.NameDescending:
            sortedData = data.toSorted((a: TechExperienceJSON, b: TechExperienceJSON) => (b.name.localeCompare(a.name)));
            break;
        case SortCriterium.SkillAscending:
            sortedData = data.toSorted((a: TechExperienceJSON, b: TechExperienceJSON) => (a.skill - b.skill));
            break;
        case SortCriterium.SkillDescending:
            sortedData = data.toSorted((a: TechExperienceJSON, b: TechExperienceJSON) => (b.skill - a.skill));
            break;
    }

    return (
        <>
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
                            <TechExperienceCard
                                experience={exp}
                            />
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default TechExperienceList

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
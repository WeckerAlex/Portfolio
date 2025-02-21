import React from 'react';
import Section from '../section/section';
import styles from "./experience.module.css";
import ExperienceCard from './components/experienceCard';
import { Grid, Typography } from '@mui/material';
import { ExperienceJSON } from '@/app/lib/database/models/experience';

interface Props {
    id: string
    data: ExperienceJSON[];
}

const experience = async ({ id, data}: Props) => {
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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                {
                    data.map(exp =>
                        <Grid item xs={6} md={4} xl={3} key={exp.name}>
                            <ExperienceCard
                                experience={exp}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Section >
    )
}

export default experience

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
import React from 'react'
import Section from '../section/section'
import styles from "./experience.module.css";
import ExperienceCard from './components/experienceCard';
import { Grid, Typography } from '@mui/material';
import Experience from '@/app/lib/database/models/experience';
import { Op } from 'sequelize';

interface Props {
    id: string
}

const getExperienceList = async () => (
    await Experience.findAll({
        where: {
            skill: {
                [Op.gte]: 50
            }
        },
        order: [['skill', 'DESC']]
    })
);

const experience = async ({ id }: Props) => {
    const experienceList = await getExperienceList();
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
                    experienceList.map(exp =>
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
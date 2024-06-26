import React, { MutableRefObject } from 'react'
import Section from '../section/section'
import styles from "./experience.module.css";
import ExperienceCard from './components/experienceCard';
import { Grid, Typography } from '@mui/material';
import { experienceList } from '../../lib/data';

interface Props extends React.PropsWithChildren {
    sectionRef: MutableRefObject<HTMLElement | null>
}

const experience = ({ sectionRef }: Props) => {
    return (
        <Section className={styles.experienceSection} containerRef={sectionRef}>
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
import React from 'react'
import Section from '../section/section'
import styles from "./projects.module.css";
import ProjectCard from './components/projectCard';
import { Grid, Typography } from '@mui/material'
import { projectList } from '../../lib/data';

interface Props {
    id: string
}

const projects = ({ id }: Props) => {
    return (
        <Section id={id} className={styles.projectsSection}>
            <Typography variant="h5" component="h3">
                <Typography variant="h5" component="span">
                    My&ensp;
                </Typography>
                <Typography variant="h5" color={'primary'} component="span">
                    Projects
                </Typography>
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                {
                    projectList.map(project =>
                        <Grid item xs={12} md={4} key={project.name} sx={{ height: '100%' }}>
                            <ProjectCard
                                project={project}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Section >
    )
}

export default projects
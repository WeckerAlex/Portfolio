import React from 'react'
import Section from '../section/section'
import styles from "./projects.module.css";
import ProjectCard from './components/projectCard';
import { Grid, Typography } from '@mui/material'
import Project from '@/app/lib/database/models/project';

interface Props {
    id: string
}

const getProjectList = async () => (
    await Project.findAll({
        include: [{ all: true }]
    })
);

const projects = async ({ id }: Props) => {
    const projectList = await getProjectList();
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
                    (projectList) ?
                        (
                            projectList.map(project =>
                                <Grid item xs={12} md={4} key={project.name} sx={{ height: '100%' }}>
                                    <ProjectCard
                                        project={project}
                                    />
                                </Grid>
                            )
                        ) :
                        (null)
                }
            </Grid>
        </Section >
    )
}

export default projects

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
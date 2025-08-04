import React from 'react'
import Section from '../section/section'
import styles from "./projects.module.css";
import ProjectCard from './components/projectCard';
import { Grid, Typography } from '@mui/material'
import { ProjectWithAllJSON } from '@/app/lib/database/models/project';
interface Props {
    id: string
    data: ProjectWithAllJSON[];
}

const projects = async ({ id, data }: Props) => {
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
                    (data) ?
                        (
                            data.map(project =>
                                <Grid size={{xs:12, md:4}}  key={project.name} sx={{ height: '100%' }}>
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
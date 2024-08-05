import React from 'react'
// import { Project } from '@/app/lib/data';
import Project from '@/app/lib/database/models/project';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import styles from "./projectCard.module.css";

interface Props {
    project: Project
}

const projectCard = ({ project }: Props) => {
    return (
        <Card className={styles.projectCard}>
            <CardMedia
                component="img"
                height="194"
                sx={{ 'objectPosition': 'top' }}
                image={project.image}
                alt={project.name}
            />
            <CardContent
                className={styles.projectCardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" component={"div"} color="text.secondary" className={styles.projectCardProjectDescription} >
                    {project.description}
                </Typography>
                <Box className={styles.projectCardAdditionalInfo}>
                    <Typography color="text.secondary" component="div">
                        Team:
                    </Typography>
                    <Box className={styles.projectCardChiplist}>
                        {project.jobs ? project.jobs.map(job =>
                            //@ts-expect-error
                            <Chip label={`${job.Projectjob.count} ${job.title}`} size="small" variant="filled" key={`${project.name} ${job.title}`} />
                        ) : null}
                    </Box>
                    <Typography color="text.secondary" component="div">
                        Tech:
                    </Typography>
                    <Box className={styles.projectCardChiplist}>
                        {project.experiences ? project.experiences.map(tech =>
                            <Chip label={tech.name} size="small" variant="filled" key={`${project.name} ${tech.name}`} />
                        ) : null}
                    </Box>
                </Box>
            </CardContent>
            {project.links ?
                <CardActions sx={{ 'flexDirection': 'row', 'gap': 1, m: 1, ml: 'auto' }}>
                    {project.links.map(link =>
                        <Button href={link.link} size="small" variant="contained" disableElevation key={`${project.name} ${link.title}`}>{link.title}</Button>
                    )}
                </CardActions> : null}
        </Card >
    );
}

export default projectCard
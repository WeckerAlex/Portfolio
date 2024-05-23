import React from 'react'
import { Project } from '@/app/lib/data';
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
                        {project.team.map(teamMember =>
                            <Chip label={`${teamMember.number} ${teamMember.title}`} size="small" variant="filled" key={`${project.name} ${teamMember.title}`} />
                        )}
                    </Box>
                    <Typography color="text.secondary" component="div">
                        Tech:
                    </Typography>
                    <Box className={styles.projectCardChiplist}>
                        {project.tech.map(tech =>
                            <Chip label={tech} size="small" variant="filled" key={`${project.name} ${tech}`} />
                        )}
                    </Box>
                </Box>
            </CardContent>
            {project.projectLinks && project.projectLinks.length > 0 ?
                <CardActions sx={{ 'flexDirection': 'row', 'gap': 1, m: 1, ml: 'auto' }}>
                    {project.projectLinks.map(projectLink =>
                        <Button size="small" variant="contained" disableElevation onClick={() => window.open(projectLink.url, "_blank")} key={`${project.name} ${projectLink.description}`}>{projectLink.description}</Button>
                    )}
                </CardActions> : null}
        </Card >
    );
}

export default projectCard
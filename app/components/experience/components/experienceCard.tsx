import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import styles from "./experienceCard.module.css";
import React from 'react'
import { Experience } from '@/app/lib/data';


interface Props {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    const { name, image } = experience
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.cardMedia}
                component="img"
                image={image}
                alt={name}
                data-tech={name}
            />
            <CardContent className={styles.cardContent}>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ExperienceCard
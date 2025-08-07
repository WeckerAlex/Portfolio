import { Box, LinearProgress, Typography } from '@mui/material';
import Image from 'next/image'
import styles from "./techExperienceCard.module.css";
import React from 'react';
import { TechExperienceJSON } from '@/app/lib/database/models/techexperience';


interface Props {
    experience: TechExperienceJSON
}

const TechExperienceCard = ({ experience }: Props) => {
    const { name, image, skill } = experience
    return <Box className={styles.card}>
        <Image
            className={styles.cardMedia}
            src={image}
            priority={true}
            width={100}
            height={100}
            alt={name}
            data-tech={name}
            aria-hidden="true"
        />
        <Typography className={styles.cardTitle} variant="h5" component="span">{name} </Typography>
        <LinearProgress
            className={styles.cardSkill}
            variant="determinate" value={skill}
            sx={{
                height: "16px"
            }}
        />
    </Box>
}

export default TechExperienceCard
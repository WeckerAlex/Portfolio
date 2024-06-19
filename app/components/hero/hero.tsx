import React from 'react'
import Section from '../section/section'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
import styles from "./hero.module.css";
import profilePic from '/public/Portrait.png'

interface Props {
    id: string
}

const hero = ({ id }: Props) => {
    return (
        <Section id={id} className={styles.heroSection}>
            <Box className={styles.heroText}>
                <Box>
                    <Typography variant='h5' component={'h2'}>
                        Hi, I am
                    </Typography>
                    <Typography variant='h4' color={'primary'} component={'h1'}>
                        Alex Wecker
                    </Typography>
                    <Typography variant='h5' component={'h2'}>
                        Fullstack web developper
                    </Typography>
                    <Button variant={'contained'} color='primary' href={`#Contact`} disableElevation>
                        Contact me
                    </Button>
                </Box>
            </Box>
            <Box className={styles.heroImage}>
                <Image
                    className={styles.content}
                    src={profilePic}
                    priority={true}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    alt="Picture of the author"
                />
            </Box>
        </Section >
    )
}

export default hero
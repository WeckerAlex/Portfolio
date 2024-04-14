import React, { MutableRefObject } from 'react'
import Section from '../section/section'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
import styles from "./hero.module.css";
import profilePic from '/public/Portrait.png'

const showContact = () => {
    alert('clicked');
}

interface Props extends React.PropsWithChildren {
    sectionRef: MutableRefObject<HTMLElement | null>
}

const hero = ({ sectionRef }: Props) => {
    return (
        <Section className={styles.heroSection} containerRef={sectionRef}>
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
                    <Button variant={'contained'} color='primary' disableElevation
                        onClick={showContact} >
                        Contact me
                    </Button>
                </Box>
            </Box>
            <Box className={styles.heroImage}>
                <Image
                    className={styles.content}
                    src={profilePic}
                    priority={true}
                    width={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    alt="Picture of the author"
                />
            </Box>
        </Section >
    )
}

export default hero
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import styles from "./certificateCard.module.css";
import React from 'react';
import { CertificateJSON } from '@/app/lib/database/models/certificate';


interface Props {
    certificate: CertificateJSON
}

const CertificateCard = ({ certificate }: Props) => {
    const { name, image } = certificate
    const pdf = image.replace('.png', '.pdf');
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
            {
                <CardActions sx={{ 'flexDirection': 'row', 'gap': 1, m: 1, ml: 'auto' }}>
                    {
                        <Button href={pdf} size="small" variant="contained" disableElevation>PDF</Button>
                    }
                </CardActions>
            }
        </Card>
    )
}

export default CertificateCard
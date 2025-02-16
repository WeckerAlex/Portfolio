import React from 'react';
import Section from '../section/section';
import styles from "./certificate.module.css";
import CertificateCard from './components/certificateCard';
import { Grid, Typography } from '@mui/material';
import Certificate from '@/app/lib/database/models/certificate';
import CertificateIssuer from '@/app/lib/database/models/certificateissuer';

interface Props {
    id: string
}

const getCertificateList = async () => (
    await CertificateIssuer.findAll({
        include: Certificate
    })
);

const Certificates = async ({ id }: Props) => {
    const CertificateIssuerList = await getCertificateList();
    return (
        <Section id={id} className={styles.certificateSection}>
            <Typography variant="h5" component="h3">
                <Typography variant="h5" component="span">
                    My&ensp;
                </Typography>
                <Typography variant="h5" color={'primary'} component="span">
                    Certificates
                </Typography>
            </Typography>
            {
                CertificateIssuerList.sort((a, b) => (a.name.localeCompare(b.name))).map(certIssuer =>
                    <>
                        <Typography className={styles.certificateIssuer} variant="h6" color={'primary'} key={certIssuer.name} component="span">
                            {certIssuer.name}
                        </Typography>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                            {
                            // @ts-expect-error
                            certIssuer.Certificates.map(cert => <Grid item xs={12} md={4} key={cert.name}>
                                <CertificateCard
                                    certificate={cert} />
                            </Grid>
                            )}
                        </Grid>
                    </>
                )
            }
        </Section >
    )
}

export default Certificates

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
import React, { Fragment } from 'react';
import Section from '../section/section';
import styles from "./certificate.module.css";
import CertificateCard from './components/certificateCard';
import { Grid, Typography } from '@mui/material';
import { CertificateIssuerWithCertificatesJSON } from '@/app/lib/database/models/certificateissuer';

interface Props {
    id: string
    data: CertificateIssuerWithCertificatesJSON[];
}

const Certificates = async ({ id, data }: Props) => {
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
                data.sort((a, b) => (a.name.localeCompare(b.name))).map(certIssuer =>
                    <Fragment key={certIssuer.name}>
                        <Typography className={styles.certificateIssuer} variant="h6" color={'primary'} component="span">
                            {certIssuer.name}
                        </Typography>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                            {
                            certIssuer.Certificates.map(cert => <Grid item xs={12} md={4} key={cert.name}>
                                <CertificateCard
                                    certificate={cert} />
                            </Grid>
                            )}
                        </Grid>
                    </Fragment>
                )
            }
        </Section >
    )
}

export default Certificates

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
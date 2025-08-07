import React from 'react';
import styles from "./profExperience.module.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { ProfExperienceJSON } from '@/app/lib/database/models/profexperience';

interface Props {
    data: ProfExperienceJSON[];
}

const ProfExperience = ({ data }: Props) => {
    
    return (
        <Timeline
            className={styles.timeline}
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2
                },
                paddingTop: "16px"
            }}
        >
            {
                data.map(event => (
                    <TimelineItem key={event.title}>
                        <TimelineOppositeContent className={styles.timelineTimerange}>
                            {event.timerange}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className={styles.timelineDot} />
                            {
                                (event.title !== data.at(-1)?.title) ? <TimelineConnector /> : null
                            }
                            
                        </TimelineSeparator>
                        <TimelineContent>
                            <dl className={styles.timelineItemData}>
                                
                                <dt>{event.title}</dt>
                                {
                                    event.annotations ? 
                                        <>
                                            {
                                                event.annotations.map(annotation => (
                                                    <dd className={styles.timelineItemAnnotationItem} key={annotation}>{ annotation }</dd>
                                                ))
                                            }
                                        </>
                                        
                                    : null
                                }
                            </dl>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    )
}

export default ProfExperience

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
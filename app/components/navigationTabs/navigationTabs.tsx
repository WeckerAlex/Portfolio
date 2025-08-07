import React, { Dispatch} from 'react';
import { Tab, Tabs } from '@mui/material';

interface Props {
    tabs: string[];
    tabIndex: number;
    setTabIndex: Dispatch<React.SetStateAction<number>>
}

const NavigationTabs = ({ tabs , tabIndex , setTabIndex}: Props) => {
    
    return (
        <Tabs
            value={tabIndex}
            onChange={(e: any, index: React.SetStateAction<number>) => setTabIndex(index)}
        >
            {
                tabs.map(label => <Tab key={`Tab_${label}`} disableRipple label={label}/>)
            }
        </Tabs>
    )
}

export default NavigationTabs

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
"use client"

import React, { ReactElement, useState } from 'react';
import styles from "./tabContainer.module.css";
import NavigationTabs from '@/app/components/navigationTabs/navigationTabs';

interface Props {
    tabs: {
        title: string,
        tab: ReactElement
    }[];
}

const TabContainer = ({ tabs }: Props) => {
    const [tabIndex, setTabIndex] = useState(0);
    
    return (
        <>
            <div className={styles.navtabs}>
                <NavigationTabs tabs={tabs.map(x=>x.title)} tabIndex={tabIndex} setTabIndex={setTabIndex} ></NavigationTabs>
            </div>
            {tabs[tabIndex].tab}
        </>

    )
}

export default TabContainer
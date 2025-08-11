'use client'

import * as React from 'react';
import App_bar from '@/app/components/App_Bar/App_bar';
import { ReactElement, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './pagecontainer.module.css'



interface Props {
    pages: Page[]
}

interface Page {
    title: string
    component: ReactElement
}

function PageContainer({ pages }:Props) {
    const [page, setPage] = useState<number>(0);
    const searchParamsPage = useSearchParams().get('page')

    if (pages[page].title !== searchParamsPage) {
        
        for (let i = 0; i < pages.length; i++) {
            const p = pages[i];
            if (p.title === searchParamsPage) {
                setPage(i)
                break;
            }
        }
    }
    return (
        <>
            <header className={styles.header}>
                <App_bar navItems={pages.map(x=>x.title)} />
            </header>
            <main className={styles.main}>
                {pages[page].component}
            </main>
        </>
    );
}

export default PageContainer

'use client'
import { useRef } from "react";
import NavBar, { navigationTarget } from "./components/App_Bar/App_bar";
import Hero from "./components/hero/hero";
import styles from "./page.module.css";

export default function Home() {
  const refs = {
    'Home': useRef<null | HTMLElement>(null),
    'Experience': useRef<null | HTMLElement>(null),
    'Projects': useRef<null | HTMLElement>(null),
    'Contact': useRef<null | HTMLElement>(null),
  }

  const scrollTo = (target: navigationTarget) => {
    console.log(`Scroll to ${target}`);
    refs[target].current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className={styles.header}>
        <NavBar navAction={scrollTo} />
      </header>
      <main className={styles.main}>
        <Hero sectionRef={refs['Home']}></Hero>
      </main >
    </>
  );
}

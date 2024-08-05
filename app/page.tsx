import NavBar from "./components/App_Bar/App_bar";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <NavBar/>
      </header>
      <main className={styles.main}>
        <Hero id={"Home"}></Hero>
        <Experience id={"Experience"}></Experience>
        <Projects id={"Projects"}></Projects>
      </main>
    </>
  );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
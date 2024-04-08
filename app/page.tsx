'use client'
import NavBar from "./components/App_Bar/App_bar";
import styles from "./page.module.css";

const scrollTo = (target: string) => {
  console.log(`Scroll to ${target}`);
}

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <NavBar navAction={scrollTo} />
      </header>
      <main className={styles.main}>
      </main>
    </>
  );
}

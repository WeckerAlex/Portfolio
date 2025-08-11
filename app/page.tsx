
import Portfolio from "./components/portfolio/portfolio";

export default async function Home() {

  return (
    <Portfolio></Portfolio>
  );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'
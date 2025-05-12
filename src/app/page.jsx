import styles from "./page.module.css";
import Background from "./Components/HeroBackground/Background";
import Navbar from "./Components/Navbar/Navbar";
import Contents from "./Components/Contents/Contents";
import LogoGrid from "./Components/LogoGrid/LogoGrid";
import GlobalSection from "./Components/GlobalSection/GlobalSection";
import ModularSection from "./Components/ModularSection/ModularSection";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    return (
        <main className={styles.main}>
            <Background />
            <Navbar />
            <Contents />
            <LogoGrid/>
            {/* <GlobalSection/> */}
            <ModularSection/>
        </main>
    );
}



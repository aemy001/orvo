import styles from "./page.module.css";
import Background from "./Components/HeroBackground/Background";
import Navbar from "./Components/Navbar/Navbar";
// import TitleBlend from "./Components/TitleBlend/TitleBlend";
import Contents from "./Components/Contents/Contents";
import LogoGrid from "./Components/LogoGrid/LogoGrid";
import GlobalSection from "./Components/GlobalSection/GlobalSection";

export default function Home() {
    return (
        <main className={styles.main}>
            <Background />
            <Navbar />
            {/* <TitleBlend /> */}
            <Contents />
            <LogoGrid/>
            {/* <GlobalSection/> */}
        </main>
    );
}



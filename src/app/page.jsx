import styles from "./page.module.css";
import Background from "./Components/HeroBackground/Background";
import Navbar from "./Components/Navbar/Navbar";
import Contents from "./Components/Contents/Contents";
import LogoGrid from "./Components/LogoGrid/LogoGrid";
import GlobalSection from "./Components/GlobalSection/GlobalSection";
// import Globe from "./Components/Globe/Globe";
// import Footer from "./Components/Footer/Footer";
import AiSection from "./Components/AiSection/AiSection";
import ReviewSlider from "./Components/ReviewSlider/ReviewSlider";
import ModularSection from "./Components/ModularSection/ModularSection";
import More from "./Components/More/More";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    return (
        <main className={styles.main}>
            <Background />
            <Navbar />
            <Contents />
            <LogoGrid/>
            <ModularSection/>
             <GlobalSection/>
             <ReviewSlider/>
             <AiSection/>
             <More/>
             {/* <Footer/> */}
             {/* <Globe/> */}
        </main>
    );
}



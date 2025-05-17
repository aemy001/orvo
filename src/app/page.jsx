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
import Faqs from "./Components/Faqs/Faqs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    const faqsData = [
  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },
  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  { title: "How long until we deliver your first blog post?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },
];
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
            <Faqs data={faqsData} />
             {/* <Footer/> */}
             {/* <Globe/> */}
        </main>
    );
}



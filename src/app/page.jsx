import styles from "./page.module.css";
import Background from "./Components/HeroBackground/Background";
import Navbar from "./Components/Navbar/Navbar";
import Contents from "./Components/Contents/Contents";
import LogoGrid from "./Components/LogoGrid/LogoGrid";
import GlobalSection from "./Components/GlobalSection/GlobalSection";
import Globe from "./Components/Globe/Globe";
import Footer from "./Components/Footer/Footer";
import AiSection from "./Components/AiSection/AiSection";
import Pricing from "./Components/Pricing/Pricing";
import ReviewSlider from "./Components/ReviewSlider/ReviewSlider";
import ModularSection from "./Components/ModularSection/ModularSection";
import More from "./Components/More/More";
import Blogs from "./Components/Blogs/Blogs";
import Faqs from "./Components/Faqs/Faqs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    const faqsData = [
  { title: "What is Orvo?", content: "Orvo is a Personal CRM designed to help you organize your professional and personal relationships. Track interactions, manage reminders, and keep important details about your contacts in one place." },
  { title: "What subscription plans do you offer?", content: "Really boy law county she unable her sister. Feet you off its like like six. Among genders are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." },  
  { title: "How is my data stored and protected?", content: "Your data is securely stored on GDPR-compliant SiteGround servers in the EU. We use SSL encryption and other security measures to ensure your data is safe." }, 
   { title: "Can I cancel my subscription?", content: "Yes, you can cancel your subscription at any time through your account settings. Your access will continue until the end of the billing cycle" }, 
    { title: "What happens when I delete my account?", content: "Your data will be retained for 30 days after you terminate your account. After that, all data will be permanently deleted from our systems." }, 
     { title: "How do I log into Orvo?", content: "You can log in securely with your email, Google authentication is coming very soon!" }, 
       { title: "Does Orvo use cookies?", content: "No, we do not use cookies or similar tracking technologies on our website or app." }, 
      { title: "How do you handle data sharing with third parties?", content: "We only share data with trusted third-party services like Stripe (for payment processing) and Google/Facebook (for login authentication). We never sell your data." },
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
             <Pricing/>
             <ReviewSlider/>
             <AiSection/>
            <Faqs data={faqsData} />
              <Blogs/>
              <More/>
             <Footer/>
               {/* <Globe/> */}
             
        </main>
    );
}



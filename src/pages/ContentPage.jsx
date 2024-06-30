import Header from "../components/Header.jsx";
import LandingPage from "./Landingpage.jsx";
import Projects from "./Projects.jsx";
import Technologies from "./Technologies.jsx";
import AboutMe from "./AboutMe.jsx";
import Certificate from "./Certificate.jsx";
import Footer from "../components/Footer.jsx";
import ToTop from "../components/ToTop.jsx";

export default function ContentPage() {
    return (
        <div className="container m-auto py-6 max-w-4xl overflow-x-hidden">
            <Header/>
            <LandingPage/>
            <Projects/>
            <Technologies/>
            <AboutMe/>
            <Certificate/>
            <Footer/>
            <ToTop/>
        </div>
    )
}
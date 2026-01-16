import Contact from "../components/contact";
import CopyRight from "../components/copyRight";
import Education from "../components/education";
import FloatingNavbar from "../components/floatingNavbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";


const Home = ()=>{

    return <>
    <FloatingNavbar/>
        <div><Header /></div>
        <Skills />
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
        <CopyRight/>
    </>
}

export default Home;
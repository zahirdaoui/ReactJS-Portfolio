import FloatingNavbar from "../components/floatingNavbar";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";


const Home = ()=>{

    return <>
    <FloatingNavbar/>
        <div><Header /></div>
        <Skills />
        <Projects/>
    </>
}

export default Home;
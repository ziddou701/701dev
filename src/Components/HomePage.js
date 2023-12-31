import About from "./About";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import ResumeAndContacts from "./ResumeAndContacts";
import Skills from "./Skills";

const Homepage = () => {
    return (
        <div className="MainScreen absolute flex flex-col fullScreen overflow-y-scroll w-full top-0 -z-10 snap-y snap-mandatory" id="MainScreen" >
            <LandingPage/>
            <About/>
            <Skills/>
            <Projects/>
            <ResumeAndContacts/>
        </div>
     );
}
 
export default Homepage;
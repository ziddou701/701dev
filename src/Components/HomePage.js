import About from "./About";
import LandingPage from "./LandingPage";

const Homepage = () => {
    return (
        <div className="absolute flex flex-col max-h-screen overflow-y-scroll w-full top-0 -z-10 snap-y snap-mandatory" >
            <LandingPage/>
            <About/>
        </div>
     );
}
 
export default Homepage;
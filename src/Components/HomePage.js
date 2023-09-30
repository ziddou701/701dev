
const Homepage = () => {
    return (
        <div className="HomePageCover relative">
            <div className="flex flex-row h-screen">

                <div className="flex flex-col relative top-1/4">
                    <div className="ml-20">
                        <p className="text-xl font-bold text-white/75">Hi , I am</p>
                        <p className="text-6xl font-extrabold text-white" >Ousmane <span>Konate</span></p>
                        <p className="font-extrabold text-5xl" > Front-End <span className="text-white">Developer</span> </p>
                    </div>
                    <div className="ml-20 mt-5">
                        <p className="text-white text-lg" ><span className="font-bold text-white">Simple</span>, yet <span className="font-bold text-white">elegent</span> crafts for the web</p>
                    </div>
                </div>

            </div> 
        </div>
     );
}
 
export default Homepage;
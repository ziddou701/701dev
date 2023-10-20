const About = () => {
    return (
        <div className="w-full min-h-screen bg-slate-100" id="About">
            <div className="relative w-10/12 mx-auto snap-start snap-always pt-28">

                <div className="relative w-fit h-fit p-10 left-16 font-extrabold font-sans text-5xl"> About </div> {/* TITLE */}

                <div className="flex flex-col ">
                    <div className="w-6/12 py-8 my-4 rounded-3xl shadow-md shadow-cyan-300/25 bg-white mr-auto ml-12 ">
                        <p className="w-full px-12 py-5 font-medium text-lg"> 
                            <p className="pb-4 font-black text-xl text-blue-600">Elegant</p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="w-6/12 py-8 my-4 rounded-3xl shadow-md shadow-cyan-300/25 bg-white ml-auto mr-12 ">
                        <p className="w-full px-12 py-5 font-medium text-lg">
                            <p className="pb-4 font-black text-xl text-blue-600">Simple</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
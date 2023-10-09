const About = () => {
    return (
        <div className="relative w-10/12 mx-auto min-h-screen snap-start snap-always pt-14" id="About">

            <div className="relative w-fit h-fit p-10 left-16 font-extrabold text-4xl"> About </div> {/* TITLE */}

            <div className="flex flex-col ">
                <div className="w-2/5 py-8 my-4 rounded-lg shadow-lg mr-auto ml-12 ">
                    <p className="w-full px-12 py-5 font-medium text-lg"> 
                        <p className="pb-4 font-black text-xl text-blue-600">Elegant</p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="w-2/5 py-8 my-4 rounded-lg shadow-lg ml-auto mr-12 ">
                    <p className="w-full px-12 py-5 font-medium text-lg">
                        <p className="pb-4 font-black text-xl text-blue-600">Simple</p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;
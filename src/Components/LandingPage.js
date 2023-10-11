
const LandingPage = () => {
    return ( 
        <div className="HomePageCover h-screen flex flex-col snap-start snap-always" id="Home">

            <div className="flex flex-row h-screen">
                {/* The rows */}
                <div className="flex flex-col relative top-1/4 pt-10 left-20 px-20 h-fit">
                {/* Social media Handles Vertical Array */}
                    <div>
                        {/* Github SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="my-14 w-9 mx-auto hover:fill-slate-100 hover:cursor-pointer duration-100"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    </div>
                    <div>
                        {/* LinkedIn svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="my-14 w-8 mx-auto hover:fill-slate-100 hover:cursor-pointer duration-100"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>                    
                    </div>
                    <div>
                        {/* Email contact svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="my-14 w-8 mx-auto hover:fill-slate-100 hover:cursor-pointer duration-100"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </div>
                </div>

                <div className="flex flex-col relative top-1/4 pt-32 pl-40 h-fit w-fit">
                    {/*The text Bits*/}
                    <div className="mx-0">
                        <p className="text-xl font-bold text-white/75">Bonjour , I am</p>
                        <p className="text-5xl font-extrabold text-white" >Ousmane <span>Konate</span></p>
                        <p className="font-extrabold text-5xl" > Front-End <span className="text-white">Developer</span> </p>
                    </div>
                    <div className="mx-0 mt-4">
                        <p className="text-white text-lg" > I create <span className="font-bold text-white/80">simple</span>, yet <span className="font-bold text-white/80">elegant</span> crafts for the web</p>
                    </div>
                    <div 
                    className="mx-0 mt-12 w-fit drop-shadow-md 
                    rounded-lg p-4 bg-gradient-to-r from-[#4e789f] to-[#61b7de]
                    text-xl text-center text-white font-extrabold
                    hover:drop-shadow-xl hover:cursor-pointer hover:border-2 duration-150 ease-in-out">
                        {/* Contact Me button */}
                        Contact me!
                    </div>
                </div>

            </div>

            
            <div className="relative mx-auto w-fit border-2 p-3 rounded-full bottom-12 animate-bounce"> 
                {/*bouncy animated scroll indication*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 fill-[#ddd]"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>

        </div>
     );
}
 
export default LandingPage;
const About = () => {
    return (
        <div className="w-full min-h-screen bg-slate-100" id="About">
            <div className="relative w-10/12 mx-auto snap-start snap-always pt-28">

                <div className="relative w-fit h-fit mx-auto p-5 lg:p-10 lg:ml-16 font-extrabold font-sans text-4xl md:text-5xl"> About </div> {/* TITLE */}

                <div className="flex flex-col ">
                    <div className=" w-full lg:w-6/12 py-5 lg:py-8 my-4 rounded-3xl shadow-md shadow-cyan-300/25 bg-white mx-auto lg:mr-aut lg:ml-12 ">
                        <p className="w-full px-6 lg:px-12 py-1 lg:py-5 font-medium text-sm lg:text-lg"> 
                            <p className="pb-4 font-black text-xl text-blue-600">Elegant</p>
                            I develop elegant web solutions because I believe that the digital world should not only be functional but also visually pleasing and user-friendly. Elegant design and functionality go hand in hand, creating a seamless and enjoyable user experience. When I craft elegant web applications, I prioritize clean and intuitive user interfaces, smooth interactions, and a cohesive visual identity. 
                        </p>
                    </div>
                    <div className=" w-full lg:w-6/12 py-5 lg:py-8 my-4 rounded-3xl shadow-md shadow-cyan-300/25 bg-white mx-auto lg:ml-aut lg:mr-12 ">
                        <p className="w-full px-6 lg:px-12 py-1 lg:py-5 font-medium text-sm lg:text-lg">
                            <p className="pb-4 font-black text-xl text-blue-600">Simple</p>
                            I develop elegant yet simple web solutions because I believe in the power of minimalism and user-centered design. Simplicity not only enhances the user experience but also streamlines development, making projects more efficient. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
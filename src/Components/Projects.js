
const Projects = () => {
    
    return (
        <div className="w-full min-h-screen bg-slate-200 snap-start snap-always " id="Projects">
            <div className='h-screen w-full backdrop-blur-xl'> {/*Simply to add the blur effect to the whole screen*/}
                <div className="relative w-10/12 mx-auto pt-28 ">
                    <div className="relative w-fit h-fit p-10 left-16 font-extrabold font-sans text-5xl"> Projects </div> {/* TITLE */}
                    
                    <div className='flex flex-col my-5 bg-slate-50 w-8/12 p-5 mx-auto rounded-3xl shadow-md shadow-cyan-300/25'>{/*TANGANA Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/Tangana-Logo.png')} alt="Logo" className='w-12 rounded-lg mx-5 shadow-lg' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 31" className="w-40">
                                <text id="Tangana" fill="#f1356d" font-size="25" font-family="Quicksand-Bold, Quicksand" font-weight="700"><tspan x="0" y="25">Tangana</tspan></text>
                            </svg>
                        </div>
                        <div className='w-10/12 mx-auto py-4 font-medium'>
                        This MERN-based project creates a user-friendly on-demand delivery platform. Users can place delivery requests, track orders in real-time, and make secure payments. Delivery personnel can register, accept assignments, and earn through the system. It offers an efficient and reliable solution for quick, hassle-free deliveries. <br /><br /> 
                            <a href='https://github.com/ziddou701/Tangana' className=' bg-[#f1356d] px-5 py-3 rounded-full drop-shadow-md font-black text-slate-50 font-sans
                             hover:bg-slate-200 hover:text-[#f1356d] duration-150' > Go to Project </a>
                        </div>
                    </div>

                    <div className='flex flex-col my-5 bg-slate-50 w-8/12 p-5 mx-auto rounded-3xl shadow-md shadow-cyan-300/25'>{/*ESDCO Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/ESDCO.jpg')} alt="Logo" className='w-12 rounded-full mx-5 shadow-lg' />
                            <p className="w-40 text-3xl font-serif font-bold my-auto text-blue-600">
                                ESDCO
                            </p>
                        </div>
                        <div className='w-10/12 mx-auto py-4 font-medium'>
                        I completely modernized the ESDCO website by streamlining navigation, updating the visual design, enhancing performance, improving content quality, and incorporating modern features. The result is a user-friendly and engaging platform that reflects ESDCO's values and appeals to a contemporary audience. <br /><br />
                            <a href='https://github.com/ziddou701/esdco' className=' bg-blue-500 px-5 py-3 rounded-full drop-shadow-md font-black text-slate-50 font-sans
                             hover:bg-slate-200 hover:text-blue-500 duration-150' > Go to Project </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Projects;
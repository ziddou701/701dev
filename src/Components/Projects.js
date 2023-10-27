import { useEffect } from 'react';

const Projects = () => {

    useEffect( () => {
        const slideUp = document.querySelectorAll(".slideUp");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("show",entry.isIntersecting);
                    if (entry.isIntersecting) observer.unobserve(entry.target);
                })
            },
            {
                threshold:0,
            }
        )

        slideUp.forEach(slideUp => {
            observer.observe(slideUp);
        })
    },[])
    
    return (
        <div className="w-full max-h-screen min-h-screen inset-0 bg-slate-200 snap-start snap-always " id="Projects">
            <div className='h-screen w-full backdrop-blur-xl'> {/*Simply to add the blur effect to the whole screen*/}
                <div className="relative w-10/12 mx-auto pt-28 ">
                    <div className="relative w-fit h-fit p-0 md:p-10 mx-auto lg:mx-0 lg:left-16 font-extrabold font-sans text-4xl sm:text-5xl"> Projects </div> {/* TITLE */}
                    
                    <div className='slideUp flex flex-col my-5 bg-slate-50 w-full lg:w-8/12 p-2 2xl:p-5 mx-auto rounded-3xl shadow-md shadow-cyan-300/25'>{/*TANGANA Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/Tangana-Logo.png')} alt="Logo" className='w-8 h-8 2xl:w-12 2xl:h-12 rounded-lg ml-5 mr-2 2xl:mx-5 shadow-lg' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 31" className="w-28 2xl:w-40">
                                <text id="Tangana" fill="#f1356d" font-size="25" font-family="Quicksand-Bold, Quicksand" font-weight="700"><tspan x="0" y="25">Tangana</tspan></text>
                            </svg>
                        </div>
                        <div className='w-10/12 mx-auto py-4 text-xs 2xl:text-base font-medium'>
                        This MERN-based project creates a user-friendly on-demand delivery platform. Users can place delivery requests, track orders in real-time, and make secure payments. Delivery personnel can register, accept assignments, and earn through the system. It offers an efficient and reliable solution for quick, hassle-free deliveries. <br /><br /> 
                            <a href='https://github.com/ziddou701/Tangana' className=' bg-[#f1356d] px-5 py-2 2xl:py-3 rounded-full drop-shadow-md font-black text-slate-50 font-sans
                             hover:bg-slate-200 hover:text-[#f1356d] duration-150' > Go to Project </a>
                        </div>
                    </div>

                    <div className='slideUp flex flex-col my-5 bg-slate-50 w-full lg:w-8/12 p-2 2xl:p-5 mx-auto rounded-3xl shadow-md shadow-cyan-300/25'>{/*ESDCO Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/ESDCO.jpg')} alt="Logo" className='w-8 h-8 2xl:w-12 2xl:h-12 rounded-full ml-5 mr-2 2xl:mx-5 shadow-lg' />
                            <p className="w-fit text-2xl 2xl:text-3xl font-serif font-bold my-auto text-blue-600">
                                ESDCO
                            </p>
                        </div>
                        <div className='w-10/12 mx-auto py-4 text-xs 2xl:text-base font-medium'>
                        I completely modernized the ESDCO website by streamlining navigation, updating the visual design, enhancing performance, improving content quality, and incorporating modern features. The result is a user-friendly and engaging platform that reflects ESDCO's values and appeals to a contemporary audience. <br /><br />
                            <a href='https://ziddou701.github.io/esdco' className=' bg-blue-500 px-5 py-2 2xl:py-3 rounded-full drop-shadow-md font-black text-slate-50 font-sans
                             hover:bg-slate-200 hover:text-blue-500 duration-150' > Go to Project </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Projects;
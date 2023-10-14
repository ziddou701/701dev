
const Projects = () => {
    
    return (
        <div className="w-full min-h-screen bg-slate-200 snap-start snap-always " id="Projects">
            <div className='h-screen w-full backdrop-blur-xl'> {/*Simply to add the blur effect to the whole screen*/}
                <div className="relative w-10/12 mx-auto pt-28 ">
                    <div className="relative w-fit h-fit p-10 left-16 font-extrabold font-sans text-5xl"> Projects </div> {/* TITLE */}
                    
                    <div className='flex flex-col my-5 bg-slate-50 w-8/12 p-5 mx-auto rounded-3xl shadow-md'>{/*TANGANA Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/Tangana-Logo.png')} alt="Logo" className='w-12 rounded-lg mx-5 shadow-lg' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 31" className="w-40">
                                <text id="Tangana" fill="#f1356d" font-size="25" font-family="Quicksand-Bold, Quicksand" font-weight="700"><tspan x="0" y="25">Tangana</tspan></text>
                            </svg>
                        </div>
                        <div className='w-10/12 mx-auto py-4 font-medium'>
                            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Link to Project...
                        </div>
                    </div>

                    <div className='flex flex-col my-5 bg-slate-50 w-8/12 p-5 mx-auto rounded-3xl shadow-md'>{/*ESDCO Project */}
                        <div className='flex flex-row'>
                            <img src={require('./Assets/ESDCO.jpg')} alt="Logo" className='w-12 rounded-full mx-5 shadow-lg' />
                            <p className="w-40 text-3xl font-serif font-bold my-auto text-blue-600">
                                ESDCO
                            </p>
                        </div>
                        <div className='w-10/12 mx-auto py-4 font-medium'>
                            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Link to Project...
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Projects;
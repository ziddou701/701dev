const ResumeAndContacts = () => {
    return (
        <div className="min-h-screen w-full snap-always snap-start bg-slate-900 flex flex-col" id="Resume">

            <div className="w-full pt-40 px-40 bg-slate-200">
                <div className="relative w-fit h-fit left-16 font-extrabold font-sans text-5xl"> Resume </div> {/* TITLE */}
                    <div className='w-10/12 mx-auto py-4 font-medium'>
                        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Link to Project
                    </div>
            </div>

            <div className="w-full relative pt-10 px-40" id="Contact">
                <div className="relative w-fit h-fit font-extrabold text-white font-sans text-5xl"> Contacts </div> {/* TITLE */}
            </div>
        </div>
    );
}
 
export default ResumeAndContacts;
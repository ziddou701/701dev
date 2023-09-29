const TopNavBar = () => {
    return ( 
        <div className="position-absolute top-0 py-4 bg-[#fff] border-b border-[#e6e6e6]">
            {/* <p className="text-lg font-bold"> hello world! </p> */}
            <div className="flex flex-row">
                <div>
                    <p className="mr-auto ml-32 font-bold text-[#5c5c5c]"> 701Dev </p>
                </div>
                <div className="flex flex-row ml-auto mr-44 font-bold">
                    <p className="px-3" >Home</p>
                    <p className="px-3" >About</p>
                    <p className="px-3" >Skills</p>
                    <p className="px-3" >Education</p>
                    <p className="px-3" >Work</p>
                    <p className="px-3" >Experience</p>
                    <p className="px-3" >Contact</p>
                </div>
            </div>
        </div>
     );
}
 
export default TopNavBar;
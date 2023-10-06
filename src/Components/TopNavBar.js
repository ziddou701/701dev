import { NavLink } from "react-router-dom";

const TopNavBar = () => {
    return ( 
        <div className="fixed w-full top-0 py-4 backdrop-blur-md">
            {/* Navigation Bar*/}
            <div className="flex flex-row">
                <div>
                    <p className="mr-auto ml-32 font-black text-[#0000006a]"> 701Dev </p>
                </div>
                <div className="flex flex-row ml-auto mr-32 font-bold">
                    <nav className="TopNavBar">
                    <NavLink to='/Home'className="mx-3 pl-1"> Home </NavLink>
                    <NavLink to='/'className="mx-3 pl-1"> About </NavLink>
                    <NavLink to='/'className="mx-3 pl-1"> Skills </NavLink>
                    <NavLink to='/'className="mx-3 pl-1"> Education </NavLink>
                    <NavLink to='/'className="mx-3 pl-1"> Work </NavLink>
                    <NavLink to='/'className="mx-3 pl-1"> Experience </NavLink>
                    <NavLink to='/'className="mx-3 px-1"> Contact </NavLink>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default TopNavBar;
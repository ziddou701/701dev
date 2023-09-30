import { NavLink } from "react-router-dom";
const TopNavBar = () => {
    return ( 
        <div className="position-absolute top-0 py-4 bg-[#fff] border-b border-[#e6e6e6]">
            {/* <p className="text-lg font-bold"> hello world! </p> */}
            <div className="flex flex-row">
                <div>
                    <p className="mr-auto ml-32 font-bold text-[#5c5c5c]"> 701Dev </p>
                </div>
                <div className="flex flex-row ml-auto mr-44 font-bold">
                    <nav className="TopNavBar">
                    <NavLink to='/'className="mx-3 pl-1"> Home </NavLink>
                    <NavLink to='/Home'className="mx-3 pl-1"> About </NavLink>
                    <NavLink to='/Home'className="mx-3 pl-1"> Skills </NavLink>
                    <NavLink to='/Home'className="mx-3 pl-1"> Education </NavLink>
                    <NavLink to='/Home'className="mx-3 pl-1"> Work </NavLink>
                    <NavLink to='/Home'className="mx-3 pl-1"> Experience </NavLink>
                    <NavLink to='/Home'className="mx-3 px-1"> Contact </NavLink>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default TopNavBar;
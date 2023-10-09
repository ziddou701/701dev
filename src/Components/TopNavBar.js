import { HashLink as Link } from "react-router-hash-link";

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
                    <Link smooth to='#Home'className="mx-3 pl-1"> Home </Link>
                    <Link smooth to='#About'className="mx-3 pl-1"> About </Link>
                    <Link to='#Skills'className="mx-3 pl-1"> Skills </Link>
                    <Link to='#Projects'className="mx-3 pl-1"> Projects </Link>
                    <Link to='#Resume'className="mx-3 pl-1"> Resume </Link>
                    <Link to='#Contact'className="mx-3 px-1"> Contact </Link>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default TopNavBar;
import { HashLink as Link } from "react-router-hash-link";

const TopNavBar = () => {
    return ( 
        <div className="fixed w-full top-0 py-4">
            {/* Navigation Bar*/}
            <div className="flex flex-row w-9/12 h-fit p-5 mx-auto mt-5 rounded-full bg-white">
                <div>
                    <p className="mr-auto ml-20 font-black text-[#0000006a] cursor-default select-none"> 701Dev </p>
                </div>
                <div className="flex flex-row ml-auto mr-20 font-bold">
                    <nav className="TopNavBar">
                    <Link smooth to='#Home'
                        className="mx-2 px-1 text-lg pl-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">Home 
                    </Link>
                    <Link smooth to='#About'
                        className="mx-2 px-1 text-lg pl-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">About 
                    </Link>
                    <Link smooth to='#Skills'
                        className="mx-2 px-1 text-lg pl-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">Skills 
                    </Link>
                    <Link smooth to='#Projects'
                        className="mx-2 px-1 text-lg pl-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">Projects 
                    </Link>
                    <Link smooth to='#Resume'
                        className="mx-2 px-1 text-lg pl-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">Resume 
                    </Link>
                    <Link smooth to='#Contact'
                        className="mx-2 px-1 text-lg px-1 hover:text-blue-600 hover:border-b-2 hover:pb-1.5 hover:border-blue-600 duration-150">Contact 
                    </Link>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default TopNavBar;
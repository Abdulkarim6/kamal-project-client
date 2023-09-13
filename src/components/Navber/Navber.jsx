
const Navber = () => {

    const menuItems = <>
        <a href="#"><li className='m-2 rounded text-xl font-medium'>Home</li></a>
        <a href="#about"><li className='m-2 rounded text-xl font-medium'>About</li></a>
        <a href="#skills"><li className='m-2 rounded text-xl font-medium'>Skills</li></a>
        <a href="#Experience"><li className='m-2 rounded text-xl font-medium'>Experience</li></a>
        <a href="#Educations"><li className='m-2 rounded text-xl font-medium'>Educations</li></a>
        <a href="#Posts"><li className='m-2 rounded text-xl font-medium'>Posts</li></a>
        <label htmlFor="addPhoto_modal" className="btn btn-ghost rounded text-xl font-medium">AddPhoto</label>
     </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Kamal Hossain</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex-nowrap">
                {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navber;
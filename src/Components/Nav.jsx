import { Link, NavLink } from "react-router-dom";

const Nav = ({themeButton, theme}) => {

    

    return (

        <div className="flex justify-between px-4 md:px-8 py-4 shadow-lg w-full z-50 sticky top-0 bg-base-100">
            <Link to={'/'} className="text-secondary text-2xl font-bold">Byte<span className="text-primary">Bites</span></Link>

            <div className="flex items-center gap-10">
                <ul className="flex gap-6 font-bold">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) =>
                            isActive ? 'text-primary' : ""
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/blogs'}
                            className={({ isActive }) => 
                                isActive ? "text-primary" : ""
                            }       
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/bookmarks'}
                        className={({isActive}) => 
                                isActive ? "text-primary" : ""
                            }   
                        >
                            Bookmarks
                        </NavLink>
                    </li>
                </ul>

                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                    onChange={themeButton} 
                    value='night'
                    checked={theme==='night' ? true : false}
                    />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>

    );
};

export default Nav;
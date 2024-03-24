import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import { useEffect, useState } from "react";

const Mainlayout = () => {

    const [theme, setTheme] = useState(
        () => {
            if (localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            } else {
                return 'light';
            }
        }
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);

    }, [theme])

    const themeButton = e => {
        if (e.target.checked) {
            setTheme('night');
        } else {
            setTheme('light');
        }

    }

    return (
        <div>
            <Nav themeButton={themeButton} theme={theme}></Nav>

            <Outlet context={{theme}}></Outlet>
        </div>
    );
};

export default Mainlayout;
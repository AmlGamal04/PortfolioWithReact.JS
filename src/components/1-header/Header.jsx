import { useState } from 'react'
import './header.css';
import { useEffect } from 'react'
// import Hero from '../2-hero/Hero';
const Header = () => {
    const [showModel, setshowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }

    }, [theme])

    return (
        <header className='flex'>
            <button onClick={() => {
                setshowModel(true)
            }} className='menu icon-menu flex' />
            <div />
            <nav>
                <ul className='flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#main">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button onClick={() => {
                //send value to localStorage
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                //get value from LS
                setTheme(localStorage.getItem("currentMode"))
            }} className='mode flex'>
                {theme === "dark" ? (<span className='icon-moon' />) : (<span className='icon-sun' />)}
            </button>
            {showModel && (
                <div className="fixed">
                    <ul className="model">
                        <li><button className='icon-close' onClick={() => {
                            setshowModel(false)
                        }} /></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#main">Projects</a></li>
                        <li><a href="#contact">Speaking</a></li>
                    </ul>
                </div>
            )

            }
        </header>
    )
}
export default Header;
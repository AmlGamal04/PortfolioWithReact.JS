import { useState } from 'react'
import './main.css'
import { projects } from './projects'
import { AnimatePresence, motion } from 'framer-motion'
const Main = () => {
    const [currentActive, setcurrentActive] = useState("all")  /*use state used to move from button to other button */
    const [arr, setarr] = useState(projects)  /*use state used to show all elements */
    const handelClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
        const newArr = projects.filter((item) => {
            const index = item.category.find((newItem) => {
                return newItem === buttonCategory
            });
            return index === buttonCategory
        });
        setarr(newArr);
    }

    return (
        <main className='flex' id='main'>
            <section className='left-section flex'>
                <button onClick={() => {
                    setcurrentActive("all");
                    setarr(projects)
                }} className={currentActive === "all" ? "active" : null} > All Projects</button>
                <button onClick={() => {
                    handelClick("css")
                }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                <button onClick={() => {
                    handelClick("js")
                }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
                <button onClick={() => {
                    setcurrentActive("react")
                    const newArr = projects.filter((item) => {
                        const index = item.category.filter((newItem) => {
                            return newItem === "react"
                        })
                        return index[0] === "react"
                    })
                    setarr(newArr);
                }} className={currentActive === "react" ? "active" : null}>react JS</button>
            </section>
            <section className='flex right-section'>
                {arr.map((item) => {
                    return (
                        <AnimatePresence>   
                        <motion.article
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{type: "spring",damping:8,stiffness:50}}
                            // exit={{ transform: "scale(0)" }}
                            key={item.imgPath} className='card'>
                            <img width={250} src={item.imgPath} alt="" />
                            <div style={{ width: "250px" }} className="box">
                                <h1 className='title'>{item.projectTitle}</h1>
                                <p className='sub-title'>{item.Description}</p>
                                <div className="icons flex">
                                    <div style={{ gap: "11px" }} className='flex'>
                                        <a href={item.link}><span className="icon-link" /></a>
                                        <a href={item.github}><span className="icon-github" /></a>                                    </div>
                                    <a href="" className='link flex'>
                                        more
                                        <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                        </AnimatePresence>
                    )
                })}
            </section>
        </main>
    )
}

export default Main
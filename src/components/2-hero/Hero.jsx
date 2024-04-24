// @ts-nocheck
import { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";

const Hero = () => {
    const lottieRef = useRef(); /* to control of speed of animation*/ 
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img src="../../../public/images/me2.jpg" className="avatar" alt="" id="about"/>
                    <div className="icon-verified" />
                </div>
                <h1 className="title">Software designer, and frontend developer</h1>
                <p className="sub-title">I am Aml Gamal. I studied at Fayoum University,
                    Faculty of Computers and Artificial Intelligence,
                    Computer Science Department. I graduated in 2023
                    with a C+ degree and specialized in designing and
                    developing websites using
                    the programming languages ​​html5, css, js, react js.
                </p>
                <div className="all-icons flex">
                    <a href="mailto:amlgamal1804@gmail.com"><span className="icon icon-envelope"/></a>
                    <a href="https://github.com/AmlGamal04"><span className="icon icon-github"/></a>
                    <a href="https://www.linkedin.com/in/aml-gamal-7142a2210"><span className="icon icon-linkedin-square"/></a>
                </div>
            </div>
            <div className="right-section animation">
            <Lottie 
            onLoadedImages={() => { 
                lottieRef.current.setSpeed(0.3);
             }}
            animationData={developerAnimation} />

            </div>
        </section>
    );
};

export default Hero;

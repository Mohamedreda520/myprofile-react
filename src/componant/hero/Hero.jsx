import "./hero.css";
import laptopAnimation from "../../../public/animation/laptop.json";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
import { color, motion, useAnimation } from "framer-motion";
import Slide from "./../Slide";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// *************************************************
import Box from "./../Box";      
import { Link } from "react-router-dom";
      

//****************************************************** */

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex " id="about">
   
     <Box num={
      <Slide delay={0.3}>
       < div className="left-section">
       <div className="parent-avatar">
         <motion.img
           initial={{ transform: "scale(0)" }}
           animate={{ transform: "scale(1)" }}
           transition={{ damping: 5, type: "spring", stiffness: 100 }}
           src="./me-modified.png"
           alt=""
           className="avatar"
         />
       </div>
       <motion.h1
         className="title"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 3 }}
       >
         Hello !<br /> I`m <span style={{ color: "crimson" }}>M</span>ohamed
         Reda.
         <br />
       </motion.h1>
         <h5 style={{ fontWeight: 600 }} className="mt-1">
           
         I'm a <span style={{ color: "blue" }}>F</span>ront-End Developer
         </h5>
       <p className="sub-title">
        Hello!
I’m Mohamed Reda, a Management Information Systems graduate and a passionate Front-End Developer.
I have solid knowledge of programming languages and software tools, and I specialize in building well-designed, responsive web interfaces. I write clean, testable, and efficient code.
I'm a hard worker and a fast learner, constantly working on improving my skills. I'm committed to mastering my craft and growing every day.
Thank you!
       </p>
       <div className="all-icons flex gap-3">
      
         <Link to={'https://facebook.com/3mohamedreda'} target="_blank" rel="noopener noreferrer" className="icon "><FaFacebook/></Link>
         <Link to={'https://github.com/Mohamedreda520'} target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></Link>
         <Link to={'https://linkedin.com/in/mohamed-reda2'} target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></Link>
         <Link to={'https://instagram.com/3mohamedreda'} target="_blank" rel="noopener noreferrer" className="icon "><FaInstagram /></Link>
         <Link to={'https://wa.me/01127650302'} target="_blank" rel="noopener noreferrer" className="icon"><FaWhatsapp /></Link>
       </div>
       </div>
     </Slide>
     }/>
   
     <Box num={
      
<Slide delay={1.12} >
<div className="right-section">
<Lottie
  className="laptop-animation"
  lottieRef={lottieRef}
  style={{ height: 355, width: 440 }}
  animationData={laptopAnimation}
  onLoadedImages={() => {
    // @ts-ignore
    lottieRef.current.setSpeed(0.4);
  }}
/>
</div>
</Slide>
     }/>
    
    </section>
  
  );
};
export default Hero;

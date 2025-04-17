import { useEffect, useState } from "react";
import Box from "./../Box";
import Slide from "./../Slide";
import "./skills.css";
const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  
  const SkillCircle = ({ skill, percentage }) => {
    return (
      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: "150px", height: "150px" }}>
        {/* دائرة التقدم */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "100%",
            height: "100%",
            background: `conic-gradient(orangered ${percentage * 3.6}deg, #e0e0e0 0deg)`,
          }}
        ></div>
  
        {/* الدائرة الداخلية */}
        <div className="position-absolute d-flex align-items-center justify-content-center bg-dark text-white rounded-circle" style={{ width: "120px", height: "120px" }}>
          <strong>{skill}</strong>
        </div>
      </div>
    );
  };
  return (
    <>
   <section className="skills" id="skills">
      <Slide delay={0.6}>
        <h2 className="title mb-5">Our Skills</h2>
      </Slide>
   
    {
      !isMobile ?
      <div>
          {/* ************* 1 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">HTML</div>
            <div className="skill-progress">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
        }
      />
         {/* ************* 2 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">CSS</div>
            <div className="skill-progress">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
        }
      />

       {/* ************* 3 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">JavaScript</div>
            <div className="skill-progress">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
        }
      />

      {/* ************* 4 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">Bootstrap</div>
            <div className="skill-progress">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        }
      />
       {/* ************* 5 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">React.js</div>
            <div className="skill-progress">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        }
      />
       {/* ************* 6 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">Tailwind Css</div>
            <div className="skill-progress">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
        }
      />
       {/* ************* 7 ********* */}
      <Box
        num={
          <div className="skill-box">
            <div className="skill-name">Git & GitHub</div>
            <div className="skill-progress">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        }
      />
      
</div>
      : 
      <div className="d-flex gap-4 flex-wrap justify-content-center">
    <Box num={
        <SkillCircle skill="HTML" percentage={85} />
    }/>
    <Box num={
        <SkillCircle skill="CSS" percentage={80} />
    }/>
    <Box num={
        <SkillCircle skill="JavaScript" percentage={75} />
    }/>
    <Box num={
        <SkillCircle skill="Bootstrap" percentage={70} />
    }/>
    <Box num={
        <SkillCircle skill="React Js" percentage={70} />
    }/>
    <Box num={
        <SkillCircle skill="Tailwind CSS" percentage={75} />
    }/>
    <Box num={
        <SkillCircle skill="Git && GitHub" percentage={70} />
    }/>
     
    </div>
      
    }
    </section> 
     </>
  );
};
export default Skills;

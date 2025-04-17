import { useState } from "react";
import "./main.css";
import { myprojects } from "./myproject";
import { AnimatePresence, motion } from "framer-motion";
import Box from "./../Box";
import Slide from "./../Slide";
import { Link } from "react-router-dom";
import PopUPDetails from "./PopUPDetails";

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
  const [currentactive, setCurrentActive] = useState("all");
  const [project, setProject] = useState(myprojects);
  const handelclick = (value) => {
    setCurrentActive(value);
    const myarray = myprojects.filter((item) => {
      // here code i ask on project other in arr[category] made css
      if (Array.isArray(item.category)) {
        return item.category.includes(value);
      } else {
        return item.category === value;
      }
    });

    setProject(myarray);
  };
  return (
    <main className="flex" id="projects">
      <Slide>
        <section className=" left-section">
          <button
            onClick={() => {
              setCurrentActive("all");
              setProject(myprojects);
            }}
            className={currentactive === "all" ? "active btn btn-dark" : null}
          >
            All 
          </button>

          <button
            onClick={() => {
              handelclick( 'css');
            }}
            className={(currentactive === "css"||currentactive === "html") ? "active btn btn-dark" : null}
          >
            HTML & CSS
          </button>

          <button
            onClick={() => {
              handelclick("javascript");
            }}
            className={
              currentactive === "javascript" ? "active btn btn-dark" : null
            }
          >
            Javascript
          </button>
          <button
            onClick={() => {
              handelclick("react");
            }}
            className={currentactive === "react" ? "active btn btn-dark" : null}
          >
            React & Tailwind css
          </button>
          <button
            onClick={() => {
              // alert(
              //   "There are No Projects Here, But it Will be there in the Future God willing"
              // );
              <p> No Projects Here</p>
              handelclick("node");
            }}
            className={currentactive === "node" ? "active btn btn-dark" : null}
          >
            Node.Js
          </button>
        </section>
      </Slide>
      <Slide delay={0.6}>
        <Box
          num={
            <section className="flex right-section">
              <AnimatePresence>
              {project.length === 0 && (
  <p style={{ color: 'gray', fontStyle: 'italic' }}>
    No projects available in this category.
  </p>
)}

                {/* loop on myprojects Array */}
                {project.map((item) => {
                  return (
                    <motion.article
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ type: "spring", damping: 7, stiffness: 50 }}
                      key={item.id}
                      className="iscard"
                    >
                      <img width={266} src={item.imgpath} alt={item.title} />
                      <div style={{ width: 266 }} className="box">
                        <h4 className="title">{item.title.length >= 20 ? `${item.title.slice(0,21)}...`:item.title }</h4>
                        <p className="subtitle">{item.discription.length >= 80 ?`${item.discription.slice(0,80)}...` :item.discription}</p>
                        <div className="flex icons">
                          <div style={{ gap: 20 }} className="flex">
                            <Link to={`${item.linkshow}`} target="_blank" className="icon-link" ></Link>
                            <Link to={`${item.github}`} target="_blank" className="icon-github"></Link>
                          </div>
                          <div
                          onClick={() => {
                            setSelectedItem(item);
                            setShowPopup(true);
                          }}
                          className="more flex">
                            more
                            <span className="icon-arrow-thin-right"></span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </section>
          }
          />
      </Slide>
      {showPopup && selectedItem && (
        <PopUPDetails
          img={selectedItem.imgpath}
          title={selectedItem.title}
          description={selectedItem.discription}
          onClose={() => setShowPopup(false)} // لو حبيت تعمل زر إغلاق داخل البوب أب
        />
      )}
    </main>
  );
};
export default Main;

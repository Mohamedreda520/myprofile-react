import Main from "./componant/main/Main";
import Header from "./componant/header/Header";
import Hero from "./componant/hero/Hero";
import Contact from "./componant/contact/Contact";
import Footer from "./componant/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Services from "./componant/service/Services";
import Skills from "./componant/skills/Skills";
function App() {
  //******* go to top by smoothly*************** */
  const up = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  //******* show button  on scroll*************** */

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowBTN(true);
      } else {
        setshowBTN(false);
      }
    });
  }, []);

  const [showBTN, setshowBTN] = useState(false);

  return (
    <div className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Services />

      <div className="divider" />

      <Main />

      <div className="divider" />
      <Skills/>
      <div className="divider" />
      <Contact />

      <div className="divider" />
      <Footer />

      <button
        style={{ opacity: showBTN ? 1 : 0, transition: "1s" }}
        onClick={up}
        className="scroll2top icon-keyboard_arrow_up btn btn-primary rounded-circle"
      />
    </div>
  );
}

export default App;

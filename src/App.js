import "bootstrap/dist/css/bootstrap.min.css";
import "./Root.css";
import "./App.css";
import KarmicNav from "./assets/components/KarmicNav";
import Header from "./assets/components/Header";
import UpcomingProjects from "./assets/components/UpcomingProjects";
import Services from "./assets/components/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./assets/components/Projects";
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <div className="body_bg">
        <div className="d-flex min_vh100 flex-column">
          <KarmicNav />
          <div className="flex-grow-1 header_bg d-flex align-items-center justify-content-center">
            <Header />
          </div>
        </div>
        <UpcomingProjects />
        <Services />
        <div className="project_bg">
          <Projects/>
        </div>
        <About />
        <Footer/>
      </div>
    </>
  );
}

export default App;

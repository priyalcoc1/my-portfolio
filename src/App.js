import HomeSection from "./components/home-section/HomeSection";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroSection from "./components/intro-section/IntroSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" key={0} element={
            <>
              <NavigationBar setBackgroundColor="transparent" fixedNavigationBarLogo={require("./images/navigation-bar-images/logo.png")} firstOption="Home" secondOption="About" thirdOption="Protfolio" fourthOption="Projects" fifthOption="Hire Me" />
              <HomeSection />
            </>
          }
          ></Route>
          <Route exact path="about" key={1} element={
            <>
              <NavigationBar setBackgroundColor="black" fixedNavigationBarLogo={require("./images/navigation-bar-images/logo.png")} firstOption="Home" secondOption="About" thirdOption="Protfolio" fourthOption="Projects" fifthOption="Hire Me" />
              <IntroSection
                line3Profession={["Front End Web Dev", "YouTuber", "Content Creator", "Freelancer"]}
                introImageLink={require("./images/about-me-images/passport-picture.jpg")}
                introHere="An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the betterment of the organization. A bachelor's degree in Computer Science Engineering has enhanced my proficiency in developing websites and looking forward to work in a competitive environment that enhances overall learning."
              />
            </>
          }
          ></Route>
          <Route exact path="portfolio" key={2} element={
            <>
              <NavigationBar setBackgroundColor="black" fixedNavigationBarLogo={require("./images/navigation-bar-images/logo.png")} firstOption="Home" secondOption="About" thirdOption="Protfolio" fourthOption="Projects" fifthOption="Hire Me" />
              <HomeSection />
            </>
          }
          ></Route>
          <Route exact path="projects" key={3} element={
            <>
              <NavigationBar setBackgroundColor="black" fixedNavigationBarLogo={require("./images/navigation-bar-images/logo.png")} firstOption="Home" secondOption="About" thirdOption="Protfolio" fourthOption="Projects" fifthOption="Hire Me" /><HomeSection /></>}></Route>
          <Route exact path="hire-me" key={4} element={
            <>
              <NavigationBar setBackgroundColor="black" fixedNavigationBarLogo={require("./images/navigation-bar-images/logo.png")} firstOption="Home" secondOption="About" thirdOption="Protfolio" fourthOption="Projects" fifthOption="Hire Me" /><HomeSection /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

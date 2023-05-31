// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
// import SocialLinks from "./components/SocialLinks";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Nav from "./components/Nav";
// import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//       <Portfolio />
//       <Experience />
//       <Contact />

//       <SocialLinks />
//     </div>
//   );
// }

// export default App;
export default function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <>
    <Nav/>
    <Home/>
    <About/>
    
    {/* <Portfolio/> */}
    <Experience/>
    <Contact/>
    <SocialLinks/>
    </>
  )
}
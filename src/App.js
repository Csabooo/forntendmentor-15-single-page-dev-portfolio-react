import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="2xl:container text-center mx-auto">
        <div className="md:max-w-[768px] md:px-[30px] lg:max-w-[1440px] mx-auto">
          <Header />
          <Main />
          <Projects />
        </div>
      </div>
      <div className="text-center ">
        <Contact />
      </div>
    </div>
  );
}

export default App;

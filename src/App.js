import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="2xl:container text-center mx-auto pb-10 md:pb-20">
        <div className="md:max-w-[768px] lg:max-w-[1110px] mx-auto">
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

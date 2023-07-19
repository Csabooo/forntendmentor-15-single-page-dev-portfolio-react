import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container text-center mx-auto ">
      <div className="px-5">
        <Header />
        <Main />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;

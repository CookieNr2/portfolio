import "./App.scss";
import Header from "./components/ui/Header/Header";
import About from "./components/ui/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ui/Contact/Contact";
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

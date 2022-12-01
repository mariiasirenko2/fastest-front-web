import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Sdata from "./components/Sdata"


function App() {
  const { shopItems } = Sdata

  return (
    <div className="App">
      <NavBar />
      <Projects shopItems={shopItems}/>
      <Footer />
    </div>
  );
}

export default App;

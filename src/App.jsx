import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

function App(){
  return(
   <div className="bg-slate-900 h-auto w-full overflow-hidden">
    <Navbar></Navbar>
    <Home></Home>
    <About />
    <Experience />
   </div>
  );
}

export default App;
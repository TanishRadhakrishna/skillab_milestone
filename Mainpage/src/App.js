import Home from "./components/Home";
import './css/App.css';
//import Admindash from "./components/Admindash";
import Studentdash from "./components/Studentdash";
function App() {
  const tan=true;
  const admin=true;
  return (
    <>
      <Home />
      {tan?
      <Studentdash/>:
        null
      }
  
    </>
  );
}

export default App;


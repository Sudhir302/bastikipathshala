import {BrowserRouter, Route, Routes} from "react-router-dom";

// ---------------importing component---------------------
import Home from "./component/Home";
import Certificate from "./component/Certificate";
import Dashboard from "./component/Dashboard";
import Volunteer from "./component/Volunteer";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Dashboard />}>
          <Route path="/" element = {<Home />} ></Route>
          <Route path="certificate" element = {<Certificate />} ></Route>
          <Route path="volunteer" element = {<Volunteer />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
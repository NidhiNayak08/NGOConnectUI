import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Allngos from "./pages/Allngos"
import CategoryData from './pages/CategoryData';
import NgoDetails from './pages/NgoDetails';
import Addngo from "./pages/Addngo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donation from "./pages/Donation";
import RegisterNgo from "./pages/RegisterNgo";
import NgoProfile from "./pages/NgoProfile";
import NgoLogin from "./pages/NgoLogin";
import VolunteerApply from "./pages/VolunteerApply";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allngos" element={<Allngos />} />
        <Route path="/category/:category" element={<CategoryData />} />
        <Route path="/ngo/:ngoId" element={<NgoDetails />} />
        <Route path="/donation/:ngoId" element={<Donation />} />
        <Route path="/Registerngo" element={< RegisterNgo/>}/>
        <Route path="/addngo" element={<Addngo />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/NgoProfile" element={<NgoProfile/>}></Route>
        <Route path="/Loginngo" element={<NgoLogin/>}></Route>
        <Route path="/applyvolunteer" element={<VolunteerApply/>}></Route>

      
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// rafce

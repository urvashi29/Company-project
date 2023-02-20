import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./modules/Login/Login";
import Timesheet from "./modules/Manager/container/Timesheet";
import ProjectOne from "./modules/Manager/container/ProjectOne";
import ProjectTwo from "./modules/Manager/container/ProjectTwo";
import Managertoemp from "./modules/Manager/container/Managertoemp";
import Navbar from './modules/Navbar/Navbar';
import Employee from "./modules/Employee/container/Employee";


function Router() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<Login />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/employee" element={<Employee />} />
        {/* <Route path="/manager" element={<Manager />} /> */}
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/project1" element={<ProjectOne />} />
        <Route path="/project2" element={<ProjectTwo />} />
        <Route path="/toemp" element={<Managertoemp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

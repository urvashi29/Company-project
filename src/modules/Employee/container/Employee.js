import React from "react";
import Button from "react-bootstrap/Button";
import "./employee.css";
import "../../Manager/container/manager.css";
import { Dropdown } from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
// import Header from "./Emp_Header";
// import Body from "./Body";
// import Footer from "./Footer";
function Employee() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="HeadBox">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1435755683/ur698lax3hckifehtdpj.png"
            className="Navlogo"
            alt="INCEDO"
            srcset=""
          />
        </a>
        <Button className="username " variant="outline-secondary">
          USER NAME
        </Button>{" "}
        <Button className="logout" href="/home" variant="outline-secondary">
          LOGOUT
        </Button>{" "}
        {/* <div className='logoutbox'>Log out</div> */}
      </div>
      <div>
        <Button className="quick_btn1" variant="outline-primary">
          Approved
        </Button>{" "}
        <Button className="quick_btn2" variant="outline-primary">
          Rejected
        </Button>{" "}
        <Button className="quick_btn3" variant="outline-primary">
          Pending
        </Button>{" "}
      </div>
      <Dropdown className="ManagerRectangleMain">
        <Dropdown.Toggle
          className="weekbtn"
          variant="success"
          id="dropdown-basic"
        >
          WEEKS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="">WEEK 1</Dropdown.Item>
          <Dropdown.Item href="">WEEK 2</Dropdown.Item>
          <Dropdown.Item href="">WEEK 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="MainScreen">
        <div class="emp_page_timesheet">
          <div className="emp_page_timesheet_box">TIMESHEET ID</div>
          <div className="emp_page_timesheet_box">TIMESHEET ID</div>
          <div className="emp_page_timesheet_box">TIMESHEET ID</div>
          <div className="emp_page_timesheet_box">TIMESHEET ID</div>
          <div className="emp_page_timesheet_box">TIMESHEET ID</div>
        </div>
      </div>
      {/* <Header/>
            <Button className="username" href="/timesheet"variant="outline-secondary">BACK TO MANAGER</Button>{' '}
            <Body/>
            <Footer/> */}
    </div>
  );
}

export default Employee;

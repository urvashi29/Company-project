import React, { useEffect, useState } from "react";
import "./Panel.css";
import MenuItem from "@mui/material/MenuItem";
import { Select, InputLabel } from "@mui/material";

const Panel = ({ changeDisplay }) => {
  const [selected, setSelected] = useState("Reportees Timesheet");

  const selectionChangeHandler = (event) => {
    console.log(selected);
    setSelected(event.target.value);
  };

  const handleClick = (e) => {
    changeDisplay(e.target.id);
  };

  return (
    <div className="panel-container">
      <p className="left-panel" onClick={handleClick} id="timesheet">
        Timesheet
      </p>

      <p>
        <Select
          style={{ marginTop: 60 }}
          className="panel"
          value={selected}
          onChange={selectionChangeHandler}
          label="Reportees Timesheet"
        >
          <InputLabel>Reportees Timesheet</InputLabel>

          <MenuItem
            value=""
            style={{ color: "#043465", backgroundColor: "#ef4815" }}
          >
            Reportees Timesheet
          </MenuItem>

          <MenuItem
            value="project1"
            style={{ color: "#043465", backgroundColor: "#ef4815" }}
            onClick={handleClick}
            id="project1"
          >
            Project 1
          </MenuItem>

          <MenuItem
            onClick={handleClick}
            id="project2"
            value="project2"
            style={{ color: "#043465", backgroundColor: "#ef4815" }}
          >
            Project 2
          </MenuItem>
        </Select>
      </p>

      <p className="left-panel" id="reportee-list" onClick={handleClick}>
        Reportee List
      </p>
    </div>
  );
};

export default Panel;

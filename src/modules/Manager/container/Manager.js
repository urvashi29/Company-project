import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Panel from "../component/Panel";
import Grid from "@mui/material/Grid";
import Timesheet from "../component/Timesheet";
import data from "../../../assets/data/showtimesheettomanager.json";
import projectOne from "../../../assets/data/showtimesheettomanagerprojectwise.json";
import ReporteeList from "../component/ReporteeList";

const Manager = () => {
  const [display, setDisplay] = useState("timesheet");
  const [timsheetDisplay, setTimesheetDisplay] = useState(data);

  const changeDisplay = (props) => {
    setDisplay(props);
  };

  useEffect(() => {
    if (display == "timesheet") {
      setTimesheetDisplay(data);
    } else if (display == "project1") {
      setTimesheetDisplay(projectOne);
    } else if (display == "project2") {
      setTimesheetDisplay(projectOne);
    }
  }, [display]);

  return (
    <div>
      <Navbar />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} md={4} sm={12}>
          <Panel changeDisplay={changeDisplay} />
        </Grid>

        <Grid item xs={8} md={8}>
          {display == "reportee-list" ? (
            <ReporteeList />
          ) : (
            <Timesheet data={timsheetDisplay} display={display} />
          )}
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Manager;

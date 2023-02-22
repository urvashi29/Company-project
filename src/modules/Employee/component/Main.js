import React, { useEffect, useState } from "react";
import "./Main.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import timesheetData from "../../../assets/data/showtimesheettoemployee.json";
import approvedData from "../../../assets/data/showtimesheettoemployeebasedonaprroval.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#043465",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: "white",
}));

const Main = () => {
  const [count, setCount] = useState({ approved: 0, rejected: 0, pending: 0 });
  const [data, setData] = useState(timesheetData);

  useEffect(() => {
    setCount({ ...count, approved: approvedData.length });
  }, []);

  const handleClick = (e) => {
    if (e.target.id == "approved") {
      setData(approvedData);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: "20px" }}
      >
        <Grid item xs={10}>
          <div className="status" onClick={handleClick} id="approved">
            Approved {count.approved}
          </div>
          <div className="status">Rejected {count.rejected}</div>
          <div className="status">Pending {count.pending}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="week-status">Dropdown {count.pending}</div>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1 }} style={{ margin: "200px 20px 0px 20px" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((item) => (
            <Grid item xs={2} sm={2} md={3}>
              <Item>
                <h2>{item.timesheetId}</h2>
                <p>Project Name: {item.project.projectName}</p>
                <p>Project Id:{item.project.project_id}</p>
                <p>Manager Name: {item.project.employee.employee_name}</p>
                <p>Status:</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Main;

// {data.map((item) => (
//   <Grid item xs={2} sm={2} md={3} key={item.project_id}>
//     <Item>
//       <h2>{item.timesheetId}</h2>
//       <p>Project Name: {item.project.projectName}</p>
//       <p>Project Id:{item.II - PROJ - 00010}</p>
//       <p>Manager Name: {item.employee_name}</p>
//       <p>Status: {}</p>
//     </Item>
//   </Grid>
// ))}

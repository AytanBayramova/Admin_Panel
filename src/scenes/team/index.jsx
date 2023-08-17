import { Box, Typography, useTheme, InputBase } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import React, { useState } from "react";

const Team = () => {
    const theme =useTheme();
    const colors = tokens(theme.pallete);
    const [searchValue, setSearchValue] = useState(""); // State for search input
    const [filteredRows, setFilteredRows] = useState(mockDataTeam);

    const columns = [
         {field: "id", headerName: "ID"}, 
         {field: "first_name", headerName: "First Name", flex: 1, cellClassNAme:"first_name-column--cell"}, 
        {field:"last_name", headerName:"Last Name", flex:1, cellClassNAme:"last_name-column--cell"},
        {field:"gender", headerName:"Gender"},
        {field:"age", headerName:"Age", type:"number", headerAlign:"left", align:"left"},
        {
            field: "role",
            headerName: "Role",
            flex: 1,
            renderCell: ({ value }) => (
              <div>
                {value === "IT (Web)" && <span>IT (Web)</span>}
                {value === "HR" && <span>Human Resources</span>}
                {value === "Digital Marketing" && <span>Digital Marketing</span>}
                {value === "Logistics" && <span>Logistics</span>}
                {value === "Road Construction Engineer" && <span>Road Construction Engineer</span>}
                {value === "Accouting" && <span>Accounting</span>}
              </div>
            ),
          },
        {field:"university", headerName:"University", flex:1}
        ];

        React.useEffect(() => {
            if (!searchValue) {
              setFilteredRows(mockDataTeam); // Show all data when search is empty
            } else {
              const filtered = mockDataTeam.filter(row =>
                row.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                row.last_name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRows(filtered);
            }
          }, [searchValue]);

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Member"/>
           <Box m="40px 0 0 0"
           height="75vh"
           sx={{
            "& .MuiDataGrid-root":{
                border:"none"
            },
           
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[200],
                borderBottom: "none",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[200],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[300]} !important`,
              },
            }}
          >
  <InputBase 
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search by name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        

            <DataGrid checkboxSelection rows={filteredRows} columns={columns} />
          </Box>
        </Box>
      );
    };
    
    export default Team;
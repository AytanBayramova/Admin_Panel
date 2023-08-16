import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Team = () => {
    const theme =useTheme();
    const colors = tokens(theme.pallete);

    const columns = [
         {field: "id", headerName: "ID"}, 
         {field: "first_name", headerName: "First Name", flex: 1, cellClassNAme:"first_name-column--cell"}, 
        {field:"last_name", headerName:"Last Name", flex:1, cellClassNAme:"last_name-column--cell"},
        {field:"gender", headerName:"Gender"},
        {field:"age", headerName:"Age", type:"number", headerAlign:"left", align:"left"},
        {field:"role", headerName:"Role", flex:1, 
        renderCell:({row: {role}})=>{
            return(
            <Box
             width="60%"
              m="0 auto"
             p="5px"
             display="flex"
             justifyContent="center"
                borderRadius="4px"
             >
                { }
                </Box>
                )}},
        {field:"university", headerName:"University", flex:1}
        ];

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
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
          </Box>
        </Box>
      );
    };
    
    export default Team;
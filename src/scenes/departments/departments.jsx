import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDepartmentData } from "../../data/mockData";
import Header from "../../components/Header";

const Department = () => {
    const theme =useTheme();
    const colors = tokens(theme.pallete);

    const columns = [
        {field: "id", headerName: "ID"}, 
         {field: "IT(Web)", headerName: "IT (Web)"}, 
         {field: "human_resources", headerName: "Human Resources", flex: 1, cellClassNAme:"human_resources-column--cell"}, 
        {field:"digital_marketing", headerName:"Digital Marketing", flex:1, cellClassNAme:"digital_marketing-column--cell"},
        {field:"logistics", headerName:"Logistics", flex:1, cellClassNAme:"logistics-column--cell"},
        {field:"road_construction_engineer", headerName:"Road construction engineer",  flex:1, cellClassNAme:"lroad_construction_engineer-column--cell"},
        {field:"accounting", headerName:"Accounting", flex:1, cellClassNAme:"accounting-column--cell" },
        ];

    return (
        <Box m="20px">
            <Header title="DEPARTMENTS" />
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
            <DataGrid checkboxSelection rows={mockDepartmentData} columns={columns} />
          </Box>
        </Box>
      );
    };
    
    export default Department;
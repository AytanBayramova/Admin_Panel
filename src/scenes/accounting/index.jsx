import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDAccoutingData } from "../../data/mockData";
import Header from "../../components/Header";

const Accounting = () => {
    const theme =useTheme();
    const colors = tokens(theme.pallete);

    const columns = [
        {field: "id", headerName: "ID"}, 
        
        {field:"accounting", headerName:"User name", flex:1, cellClassNAme:"accounting-column--cell" },
        ];

    return (
        <Box m="20px">
            <Header title="Accounting" />
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
            <DataGrid checkboxSelection rows={mockDAccoutingData} columns={columns} />
          </Box>
        </Box>
      );
    };
    
    export default Accounting;
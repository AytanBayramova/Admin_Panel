import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useState } from "react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
     
      <Box display="flex" marginLeft="auto">
        
       
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
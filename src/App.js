import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { useMode } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeProvider } from '@mui/material/styles';
import Login from "./scenes/login"
import Team from "./scenes/team";
import Bar from "./scenes/bar";
// import Line from "./scenes/line";
import Pie from "./scenes/pie";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import IT from "./scenes/it";
import HumanResources from "./scenes/humanresources";
import DigitalMarketing from "./scenes/digitalmarketing";
import RoadConstruction from "./scenes/road";
import Accounting from "./scenes/accounting";
import Logistics from "./scenes/logistics";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    // <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/login" element={<Login />} />
               <Route path="/calendar" element={<Calendar />} />
               <Route path="/IT" element={<IT/>} />
               <Route path="/accounting" element={<Accounting/>} />
               <Route path="/humanresources" element={<HumanResources/>} />
               <Route path="/logistics" element={<Logistics/>} />
               <Route path="/roadconstruction" element={<RoadConstruction/>} />
               <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;

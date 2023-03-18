import React, { useState } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts";
import Bar from "./scenes/bar/Bar";
import Form from "./scenes/form/Form";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";
import FAQ from "./scenes/faq/Faq";
import Geography from "./scenes/geography/Geography";
import Calendar from "./scenes/calendar/Calendar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return ( 
    <ColorModeContext.Provider value={colorMode}  >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

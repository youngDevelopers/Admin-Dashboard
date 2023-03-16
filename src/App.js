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

function App() {
  const [theme, colorMode] = useMode();
  return ( 
    <ColorModeContext.Provider value={colorMode}  >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

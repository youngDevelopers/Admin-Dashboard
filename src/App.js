import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material-'

function App() {
  return ( 
    <ColorModeContext.Provider value={colorMode}  >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="app">
          <main className="content">
            Hello
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

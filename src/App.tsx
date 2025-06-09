import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

const themeuse = createTheme(theme)

function App() {

  return (
    <>
    <ThemeProvider theme={themeuse}>
      <div className="container">
        <div className="card">
          <h2 className="h2">Example of MUI Design Tokens</h2>
          <div className="flex">
            <div className="token">
              <h3 className="h3">spacing</h3>
              <div className="grid">
                <div className="cell" style={{ padding: themeuse.spacing(1) }}>
                  spacing(1)
                </div>
                <div className="cell" style={{ padding: themeuse.spacing(2) }}>
                  spacing(2)
                </div>
                <div className="cell" style={{ padding: themeuse.spacing(3) }}>
                  spacing(3)
                </div>
              </div>
            </div>
            <div className="token">
              <h3 className="h3">palette</h3>
              <div className="grid">
                <div className="cell" style={{ backgroundColor: themeuse.palette.primary.main }}>
                  primary.main
                </div>
                <div className="cell" style={{ backgroundColor: themeuse.palette.primary.light }}>
                  primary.light
                </div>
                <div className="cell" style={{ backgroundColor: themeuse.palette.primary.dark }}>
                  primary.dark
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App

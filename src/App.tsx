import AuthContextProvider from './auth/hooks/context';
import ThemeProvider from './mui/theme';
import BrowserProvider from "./router/provider"

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <BrowserProvider />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App

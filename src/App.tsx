import AuthContextProvider from './auth/hooks/context';
import ThemeProvider from './mui/theme';
import BrowserProvider from "./router/provider"
import NotexsContextProvider from './store/context';

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NotexsContextProvider>
          <BrowserProvider />
        </NotexsContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App

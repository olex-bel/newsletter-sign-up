
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewsletterSignUp from './components/NewsletterSignUp'
import NewsletterSignUpConfirmation from './components/NewsletterSignUpConfirmation';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    darkBlue: {
      main: '#232742',
      dark: '#181b2e',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    }
  },
});

function App() {
  const [email, setEmail] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {email? 
          <NewsletterSignUpConfirmation email={email} onDismissEmail={() => setEmail(null)} />
          :
          <NewsletterSignUp setEmail={setEmail} />
        }
      </div>  
    </ThemeProvider>
  )
}

export default App

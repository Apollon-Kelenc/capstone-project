import '../styles/globals.css';
import { useState } from 'react';
import { useLocalStorage } from '../utils/useLocalStorage';
import { Slide } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const initialWineState = [];

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [savedWine, setSavedWine] = useLocalStorage(
    'savedWine',
    initialWineState
  );
  const [boughtWine, setBoughtWine] = useLocalStorage(
    'boughtWine',
    initialWineState
  );
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      TransitionComponent={Slide}
    >
      <Component
        {...pageProps}
        filteredWine={filteredWine}
        setFilteredWine={setFilteredWine}
        savedWine={savedWine}
        setSavedWine={setSavedWine}
        boughtWine={boughtWine}
        setBoughtWine={setBoughtWine}
      />
    </SnackbarProvider>
  );
}

export default MyApp;

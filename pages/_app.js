import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../utils/useLocalStorage';
import { Snackbar } from '@mui/material';
import { Slide } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const initialWineState = {
  savedWine: [],
};

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [savedWine, setSavedWine] = useLocalStorage(
    'savedWine',
    initialWineState
  );

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
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
      />
    </SnackbarProvider>
  );
}

export default MyApp;

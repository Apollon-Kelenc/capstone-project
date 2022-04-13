import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [savedWine, setSavedWine] = useState([]);

  return (
    <Component
      {...pageProps}
      filteredWine={filteredWine}
      setFilteredWine={setFilteredWine}
      saveWine={savedWine}
      setSaveWine={setSavedWine}
    />
  );
}

export default MyApp;

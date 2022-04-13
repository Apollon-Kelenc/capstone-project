import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [saveWine, setSaveWine] = useState([]);

  return (
    <Component
      {...pageProps}
      filteredWine={filteredWine}
      setFilteredWine={setFilteredWine}
      saveWine={saveWine}
      setSaveWine={setSaveWine}
    />
  );
}

export default MyApp;

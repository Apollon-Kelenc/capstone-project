import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState('');

  return (
    <Component
      {...pageProps}
      filteredWine={filteredWine}
      setFilteredWine={setFilteredWine}
    />
  );
}

export default MyApp;

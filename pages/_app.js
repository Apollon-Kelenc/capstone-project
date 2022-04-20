import '../styles/globals.css';
import { useState } from 'react';
import { Icon } from '@iconify/react';

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [savedWine, setSavedWine] = useState([
    {
      name: '',
      url: (
        <a href="" target="" rel="">
          <Icon icon="" color="" width="" height="" />
        </a>
      ),
      tasteProfile: [''],
      type: '',
      pairsWith: '',
      tag: [''],
      src: '',
    },
  ]);

  return (
    <Component
      {...pageProps}
      filteredWine={filteredWine}
      setFilteredWine={setFilteredWine}
      savedWine={savedWine}
      setSavedWine={setSavedWine}
    />
  );
}

export default MyApp;

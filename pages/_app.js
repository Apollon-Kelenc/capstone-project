import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

function useLocalState(key, initial) {
  const [savedWine, setSavedWine] = useState(() => {
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(savedWine));
  }, [savedWine, key]);

  return [savedWine, setSavedWine];
}

function MyApp({ Component, pageProps }) {
  const [filteredWine, setFilteredWine] = useState([]);
  const [savedWine, setSavedWine] = useLocalState([
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

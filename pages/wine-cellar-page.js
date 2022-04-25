import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import WineCard from '../components/Wine-Card/WineCard';
import WinecellarNavBar from '../components/NavBar/WineCellarNavbar';

export default function WineCellarPage({ boughtWine }) {
  return (
    <>
      <AppContainer>
        <ImageContainer>
          <Image
            src={header_picture}
            alt="wine picture"
            layout={'fill'}
            objectFit={'cover'}
          />
        </ImageContainer>
        <StyledHeader>Dein Weinkeller</StyledHeader>
        {boughtWine.map(wine => (
          <>
            <WineCard src={wine.src} name={wine.name} />
          </>
        ))}
        <WinecellarNavBar />
      </AppContainer>
    </>
  );
}
const StyledHeader = styled.h1`
  margin: 1rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 3.5rem;
  background-color: #77818b;
`;

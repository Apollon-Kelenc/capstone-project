import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';
import WineCard from '../components/Wine-Card/WineCard';
import NavBar from '../components/Navbar/NavBar';

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
        <NavBar />
        {/* <NavBar>
          <Link href="/quiz/start" passHref>
            <StyledQuizButton>Q</StyledQuizButton>
          </Link>
          <StyledWineGlasButton>
            <Link href="/bookmark-page" passHref>
              <Icon icon="emojione:wine-glass" width="43" height="43" />
            </Link>
          </StyledWineGlasButton>
          <StyledBarrelButton>
            <Link href="/wine-cellar-page" passHref>
              <Icon
                icon="tabler:barrel"
                color="#8a98a5"
                width="47"
                height="47"
              />
            </Link>
          </StyledBarrelButton>
        </NavBar> */}
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

// const NavBar = styled.footer`
//   position: fixed;
//   bottom: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;
//   height: 59px;
//   gap: 30px;
//   background-color: rgba(31, 31, 35, 1);
// `;

// const StyledQuizButton = styled.button`
//   font-family: Georgia, 'Times New Roman', Times, serif;
//   font-size: 42px;
//   padding-bottom: 9px;
//   color: #8a98a5;
//   border: none;
//   background-color: rgba(31, 31, 35, 1);
// `;

// const StyledWineGlasButton = styled.button`
//   font-family: Georgia, 'Times New Roman', Times, serif;
//   color: #8a98a5;
//   border: none;
//   margin-top: 5px;
//   background-color: rgba(31, 31, 35, 1);
// `;

// const StyledBarrelButton = styled.button`
//   font-family: Georgia, 'Times New Roman', Times, serif;
//   color: #8a98a5;
//   border: none;
//   margin-top: 3px;
//   background-color: rgba(31, 31, 35, 1);
//   border-bottom: 3px solid white;
//   padding-top: 3px;
// `;

import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';

export default function ResultPage({ filteredWine, setSavedWine, savedWine }) {
  function saveWine() {
    setSavedWine(filteredWine);
    // alert(savedWine[0].type);
  }
  console.log(savedWine);
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
        <StyledHeader>Deine Empfehlung</StyledHeader>
        <ParagraphContainer>
          {filteredWine.map(wine => (
            <>
              <WineBottleContainer>
                <Image
                  src={wine.src}
                  alt="Wine Sample Picture"
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </WineBottleContainer>
              <WineName>{wine.name}</WineName>
              <p>Geschmacksprofil:</p>
              <StyledList>
                {wine.tasteProfile.map((taste, index) => (
                  <li key={index}>{taste}</li>
                ))}
              </StyledList>
              <WineType>
                Art: <strong>{wine.type}</strong>
              </WineType>
              <p>
                Passt zu: <strong>{wine.pairsWith}</strong>
              </p>
            </>
          ))}
        </ParagraphContainer>
        <ButtonsCointainer>
          <Link href="/quiz/start" passHref>
            <RestartQuizButton>
              Neue Suche
              <Icon icon="codicon:debug-restart" />
            </RestartQuizButton>
          </Link>
          <SaveWineButton onClick={saveWine}>
            <Icon icon="emojione:wine-glass" width="30" height="30" />
          </SaveWineButton>
        </ButtonsCointainer>
        <NavBar>
          <Link href="/landing-page" passHref>
            <StyledQuizButton>Q</StyledQuizButton>
          </Link>
          <StyledWineGlasButton>
            <Link href="/bookmark-page" passHref>
              <Icon icon="emojione:wine-glass" width="43" height="43" />
            </Link>
          </StyledWineGlasButton>
          <StyledBarrelButton>
            <Link href="/result-page" passHref>
              <Icon
                icon="tabler:barrel"
                color="#8a98a5"
                width="47"
                height="47"
              />
            </Link>
          </StyledBarrelButton>
        </NavBar>
      </AppContainer>
    </>
  );
}

const StyledHeader = styled.h1`
  margin: 2rem 2rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const ParagraphContainer = styled.div`
  padding: 20px 20px 10px 30px;
  color: white;
`;

const WineBottleContainer = styled.div`
  height: 200px;
  width: 4rem;
  margin: 0rem 8.5rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const WineName = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const WineType = styled.p`
  margin-bottom: 0.5rem;
`;
const StyledList = styled.ul`
  margin: 1rem 0rem 2rem 0rem;
  list-style: none;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  height: 183px;
  width: 100%;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgba(94, 91, 91);
`;

const RestartQuizButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin: 1.5rem;
  padding: 1rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 60px;
  width: auto;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover,
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

const SaveWineButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 31px;
  font-weight: 500;
  margin: 1.5rem;
  padding: 1rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 60px;
  width: auto;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover,
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

const NavBar = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 4.5rem;
  gap: 30px;
  background-color: rgba(31, 31, 35, 1);
`;
const StyledQuizButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 45px;
  padding-bottom: 14px;
  color: #8a98a5;
  border: none;
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    padding-top: 3px;
  }
`;

const StyledWineGlasButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 45px;
  color: #8a98a5;
  border: none;
  margin-top: 5px;
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    padding-top: 3px;
  }
`;

const StyledBarrelButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 45px;
  color: #8a98a5;
  border: none;
  margin-top: 5px;
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    padding-top: 3px;
  }
`;

const ButtonsCointainer = styled.div`
  display: flex;
`;

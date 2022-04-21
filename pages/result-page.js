import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';

export default function ResultPage({ filteredWine, setSavedWine, savedWine }) {
  function saveWine() {
    setSavedWine([...savedWine, filteredWine]);
  }
  const { enqueueSnackbar } = useSnackbar();

  const saveWineAlert = () => {
    enqueueSnackbar('Dein Wein wurde gespeichert!', {
      variant: 'success',
      autoHideDuration: 1500,
    });
  };

  function handleClick() {
    saveWine();
    saveWineAlert();
  }

  return (
    <>
      <AppContainer>
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
              <WineName>
                {wine.name}
                <BuyButton>{wine.url}</BuyButton>
              </WineName>
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
          <SaveWineButton onClick={handleClick}>
            <Icon icon="emojione:wine-glass" width="32" height="32" />
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
            <Link href="/wine-cellar-page" passHref>
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
  margin: 1.5rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const ParagraphContainer = styled.div`
  color: white;
  margin-left: 1rem;
`;

const WineBottleContainer = styled.div`
  height: 200px;
  width: 4rem;
  margin: 0rem 8.5rem;
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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #77818b;
`;

const BuyButton = styled.button`
  margin-left: 1rem;
  background-color: white;
  height: 42px;
  width: 42px;
  border-radius: 21px;
  border: 0.5px solid white;
`;

const RestartQuizButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  padding: 0.5rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 55px;
  margin-top: 1.5rem;
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
  padding: 0.5rem;
  margin: 1.5rem 0rem 0rem 1.5rem;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
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
  height: 59px;
  gap: 30px;
  background-color: rgba(31, 31, 35, 1);
`;
const StyledQuizButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 42px;
  padding-bottom: 9px;
  color: #8a98a5;
  border: none;
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    margin-top: 1px;
  }
`;
const StyledWineGlasButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
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
  color: #8a98a5;
  border: none;
  margin-top: 3px;
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    padding-top: 3px;
  }
`;
const ButtonsCointainer = styled.div`
  display: flex;
`;

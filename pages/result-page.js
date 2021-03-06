import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import QuizNavBar from '../components/NavBar/QuizNavBar';

export default function ResultPage({ filteredWine, setSavedWine, savedWine }) {
  function saveWine() {
    setSavedWine([...savedWine, ...filteredWine]);
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
          {filteredWine.map((wine, index) => (
            <>
              <WineBottleContainer>
                <Image
                  src={wine.src}
                  alt="Wine Sample Picture"
                  layout={'fill'}
                  objectFit={'contain'}
                  key={index}
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
        <QuizNavBar />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #77818b;
`;

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

const BuyButton = styled.button`
  margin-left: 1rem;
  background-color: white;
  height: 42px;
  width: 42px;
  border-radius: 21px;
  border: 0.5px solid white;
`;

const StyledList = styled.ul`
  margin: 1rem 0rem 2rem 0rem;
  list-style: none;
  font-weight: 700;
`;

const WineType = styled.p`
  margin-bottom: 0.5rem;
`;

const ButtonsCointainer = styled.div`
  display: flex;
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

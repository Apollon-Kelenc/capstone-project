import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import Wine_Picture from '/public/wine/Vincent-Dereuil.png';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { wine } from '../lib/wine';

export default function ResultPage({ filteredWine }) {
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
          {filteredWine[0].map((wine, index) => (
            <>
              <WineBottleContainer>
                <Image
                  src={wine.src}
                  alt="Wine Sample Picture"
                  layout={'fill'}
                  objectFit={'cover'}
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
        <Link href="/quiz/start" passHref>
          <RestartQuizButton>
            Neue Suche
            <Icon icon="codicon:debug-restart" />
          </RestartQuizButton>
        </Link>
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
  padding: 20px 20px;
  color: white;
`;

const WineBottleContainer = styled.div`
  height: 170px;
  width: 25%;
  margin: 0rem 8rem 1rem 6rem;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
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
  font-size: 31px;
  font-weight: 500;
  margin: 1.5rem;
  padding: 1rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 75px;
  width: auto;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover,
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

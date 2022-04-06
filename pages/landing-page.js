import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import landing_picture from '../public/landing-page-background.png';

export default function LandingPage() {
  return (
    <>
      <AppContainer>
        <ImageContainer>
          <Image
            src={landing_picture}
            alt="wine picture"
            layout={'fill'}
            objectFit={'cover'}
            unoptimized={true}
            quality="100"
          />
        </ImageContainer>
        <StyledAppName>In Vino Veritas</StyledAppName>
        <AppInfo>Dein Wein Sommelier</AppInfo>
        <ParagraphContainer>
          <p>
            Beantworte die folgenden Fragen und erhalte deine personalisierte
            Weinempfehlung für dein Essen.
          </p>
        </ParagraphContainer>
        <Link href="/quiz/start" passHref>
          <StartQuizButton>Starte das Quiz</StartQuizButton>
        </Link>
      </AppContainer>
    </>
  );
}
const AppContainer = styled.div`
  height: 100vh;
`;

const StyledAppName = styled.h1`
  padding: 11rem 0rem 0rem 0rem;
  margin: 0rem 0rem 1rem 1rem;
  font-size: 50px;
  font-weight: lighter;
  font-family: 'Trochut';
  color: white;
  position: relative;
  z-index: 2;
`;
const AppInfo = styled.p`
  margin-left: 1rem;
  color: white;
  position: relative;
  z-index: 2;
`;
const ParagraphContainer = styled.div`
  margin-top: 50px;
  padding: 0rem 8rem 0rem 1rem;
  color: white;
  position: relative;
  z-index: 2;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const StartQuizButton = styled.button`
  font-size: 31px;
  font-weight: 500;
  margin: 20rem 0rem 0rem 3rem;
  color: white;
  background-color: rgba(109, 19, 40);
  border-radius: 9px;
  height: 75px;
  width: 300px;
  transition: 0ms;
  border: none;
  position: relative;
  z-index: 2;
  :hover,
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
    border: 2px solid rgba(89, 199, 72, 1);
  }
`;

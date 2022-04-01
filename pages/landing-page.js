import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import landing_picture from '../public/landing-page-background.jpeg';

export default function LandingPage() {
  return (
    <>
      <AppContainer>
        <StyledAppName>In Vino Veritas</StyledAppName>
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

const ParagraphContainer = styled.div`
  margin: 50px 30px 0px 30px;
  padding: 60px 40px;
  background-color: rgba(255, 255, 236, 1);
  border: 2px solid black;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  height: 200%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    rgba(244, 194, 194, 1),
    rgba(128, 0, 32, 1)
  );
`;

const StartQuizButton = styled.button`
  font-size: 31px;
  font-weight: 500;
  margin-top: 3.5rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 75px;
  width: 300px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover,
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

const StyledAppName = styled.h1`
  margin-top: 0.5rem;
  font-size: 70px;
  font-weight: 500;
  font-family: 'Trochut';
  color: white;
`;

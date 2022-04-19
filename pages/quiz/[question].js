import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { quiz } from '../../lib/quiz';
import header_picture from '/public/header-picture.jpeg';
import { wine } from '../../lib/wine';
import result_picture from '/public/result-picture.jpeg';
import { Icon } from '@iconify/react';

const Question = ({ filteredWine, setFilteredWine }) => {
  const [chosenAnswers, setChosenAnswers] = useState([]);

  const router = useRouter();
  const { question } = router.query;

  const currentQuestion = quiz[question];

  const firstFilter = wine.filter(wine => wine.tag.includes(chosenAnswers[0]));

  const secondFilter = firstFilter.filter(wine =>
    wine.tag.includes(chosenAnswers[1])
  );
  const thirdFilter = secondFilter.filter(wine =>
    wine.tag.includes(chosenAnswers[2])
  );

  function filterWine() {
    setFilteredWine(thirdFilter);
  }

  function saveAnswer(nextQuestion, answer) {
    setChosenAnswers([...chosenAnswers, answer]);
    setTimeout(() => {
      router.push(`/quiz/${nextQuestion}`);
    }, 200);
  }
  return (
    <AppContainer>
      <ImageContainer>
        <Image
          src={header_picture}
          alt="wine picture"
          layout={'fill'}
          objectFit={'cover'}
        />
      </ImageContainer>
      <StyledHeader>{currentQuestion?.question}</StyledHeader>
      <Container>
        {chosenAnswers.length < 3 ? (
          currentQuestion?.answers.map(answer => (
            <FoodButton
              key={answer.label}
              onClick={() => {
                saveAnswer(answer.nextQuestion, answer.filter);
              }}
            >
              {answer.label}
            </FoodButton>
          ))
        ) : (
          <>
            <Image
              src={result_picture}
              alt="wine picture"
              layout={'fill'}
              objectFit={'cover'}
            />
            <Link href="/result-page" passHref>
              <ResultButton onClick={filterWine}>Dein Resultat</ResultButton>
            </Link>
          </>
        )}
      </Container>
      {chosenAnswers.length === 3 ? (
        ''
      ) : (
        <>
          <StyledCounter>
            Noch <strong>{currentQuestion?.remaining}</strong> Fragen bis zum
            perfekten Wein!
          </StyledCounter>
          <Link href="/landing-page" passHref>
            <BackArrow>&larr;</BackArrow>
          </Link>
          <p>Zurück</p>
        </>
      )}
      <NavBar>
        <Link href="/landing-page" passHref>
          <StyledQuizButton>Q</StyledQuizButton>
        </Link>
        <StyledWineGlasButton>
          <Link href="/bookmark-page" passHref>
            <Icon icon="emojione:wine-glass" width="41" height="41" />
          </Link>
        </StyledWineGlasButton>
        <StyledBarrelButton>
          <Link href="/result-page" passHref>
            <Icon icon="tabler:barrel" color="#8a98a5" width="45" height="45" />
          </Link>
        </StyledBarrelButton>
      </NavBar>
    </AppContainer>
  );
};

export default Question;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;

const FoodButton = styled.button`
  width: 100%;
  padding: 30px 20px;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  color: black;
  :hover {
    background-color: rgba(200, 200, 200, 1);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgba(94, 91, 91);
`;

const BackArrow = styled.button`
  background-color: rgba(255, 255, 236, 1);
  margin-top: 1rem;
  border-radius: 50%;
  height: 56px;
  width: 56px;
  font-size: 30px;
  padding-bottom: 5px;
  color: black;
  :hover {
    color: red;
  }
`;

const StyledHeader = styled.h1`
  margin: 1.5rem 0em 1rem 0rem;
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const StyledCounter = styled.div`
  color: white;
  font-size: 17px;
  margin-top: 1rem;
`;

const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;
const ResultButton = styled.button`
  font-size: 30px;
  font-weight: 500;
  margin: 8.5rem 0rem 0rem 4.5rem;
  color: white;
  background-color: rgba(109, 19, 40);
  border-radius: 9px;
  height: 65px;
  width: 230px;
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
    padding-top: 3px;
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

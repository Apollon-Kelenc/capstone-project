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
            <Icon icon="emojione:wine-glass" width="43" height="43" />
          </Link>
        </StyledWineGlasButton>
        <StyledBarrelButton>
          <Link href="/result-page" passHref>
            <Icon icon="tabler:barrel" color="#8a98a5" width="47" height="47" />
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
  padding: 35px;
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
  margin-top: 1.5rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  font-size: 40px;
  padding-bottom: 5px;
  color: black;
  :hover {
    color: red;
  }
`;

const StyledHeader = styled.h1`
  margin: 2rem 2rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const StyledCounter = styled.div`
  color: white;
  font-size: 19px;
  margin-top: 3rem;
`;

const ImageContainer = styled.div`
  height: 183px;
  width: 100%;
  position: relative;
`;
const ResultButton = styled.button`
  font-size: 31px;
  font-weight: 500;
  margin: 10rem 4rem 0rem 4rem;
  color: white;
  background-color: rgba(109, 19, 40);
  border-radius: 9px;
  height: 75px;
  width: 250px;
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
  background-color: rgba(31, 31, 35, 1);
  :hover {
    border-bottom: 3px solid white;
    padding-top: 3px;
  }
`;

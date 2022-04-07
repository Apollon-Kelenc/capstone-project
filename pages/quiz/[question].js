import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { quiz } from '../../lib/quiz';
import header_picture from '/public/header-picture.jpeg';
import { wine } from '../../lib/wine';

const Question = ({ filteredWine, setFilteredWine }) => {
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  console.log('chosenAnswers', chosenAnswers);
  console.log('filteredWine', filteredWine);
  const router = useRouter();
  const { question } = router.query;

  const currentQuestion = quiz[question];
  const quizAnswers = quiz.start.answers;

  function filterWine() {
    chosenAnswers.map(chosenAnswer => {
      const chosenWine = wine.filter(wine => wine.tag.includes(chosenAnswer));
      setFilteredWine([...filteredWine, chosenWine]);
    });
  }

  function saveAnswer(nextQuestion, answer) {
    setChosenAnswers([...chosenAnswers, answer]);
    setTimeout(() => {
      router.push(`/quiz/${nextQuestion}`);
    }, 200);
  }
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
        <StyledHeader>{currentQuestion?.question}</StyledHeader>
        <Container>
          {chosenAnswers.length < 3 ? (
            currentQuestion.answers.map(answer => (
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
            <Link href="/result-page" passHref>
              <ResultButton onClick={filterWine}>Dein Resultat</ResultButton>
            </Link>
          )}
        </Container>
        {chosenAnswers.length === 3 ? (
          ''
        ) : (
          <>
            {' '}
            <Link href="/landing-page" passHref>
              <BackArrow>&larr;</BackArrow>
            </Link>
            <StyledCounter>
              Noch <strong>{currentQuestion?.remaining}</strong> Fragen bis zum
              perfekten Wein!
            </StyledCounter>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default Question;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 20px;
  justify-items: center;
`;

const FoodButton = styled.button`
  width: 90%;
  padding: 35px;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  color: black;
  transition: 0ms;
  :hover {
    border: 3px solid black;
    border-color: rgba(89, 199, 72, 1);
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
  position: fixed;
  bottom: 9rem;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  font-size: 40px;
  padding-bottom: 5px;
  color: black;
  transition: 0ms;
  :hover {
    color: red;
  }
`;

const StyledHeader = styled.h1`
  margin: 2rem 2rem;
  font-size: 27px;
  font-weight: 500;
`;

const StyledCounter = styled.div`
  position: fixed;
  color: white;
  bottom: 4.5rem;
  font-size: 19px;
`;

const ImageContainer = styled.div`
  height: 183px;
  width: 100%;
  position: relative;
`;
const ResultButton = styled.button`
  font-size: 31px;
  font-weight: 500;
  margin: 10rem 0rem 0rem 3rem;
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

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { quiz } from '../../lib/quiz';
import header_picture from '/public/header-picture.jpeg';
import { wine } from '../../lib/wine';
import result_picture from '/public/result-picture.jpeg';
import { AnimatePresence, motion } from 'framer-motion';
import QuizNavBar from '../../components/NavBar/QuizNavBar';

const Question = ({ setFilteredWine }) => {
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
      <StyledQuestion>{currentQuestion?.question}</StyledQuestion>
      {chosenAnswers.length < 3 ? (
        <Container
          key={currentQuestion?.question}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          animate="show"
        >
          {currentQuestion?.answers.map(answer => (
            <AnswerButton
              variants={{
                hidden: { scale: 0.6, y: -10, opacity: 0 },
                show: { scale: 1, y: 0, opacity: 1 },
                selected: { scale: 1.05, y: 0 },
              }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.05 }}
              animate={
                answer.filter === chosenAnswers[chosenAnswers.length - 1]
                  ? 'selected'
                  : undefined
              }
              key={answer.label}
              onClick={() => {
                saveAnswer(answer.nextQuestion, answer.filter);
              }}
            >
              {answer.label}
            </AnswerButton>
          ))}
        </Container>
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
      {chosenAnswers.length === 3 ? (
        ''
      ) : (
        <>
          <StyledCounter>
            Noch{' '}
            <AnimatePresence>
              <motion.strong
                style={{
                  display: 'inline-block',
                  padding: '0 0.5ch',
                  width: '2ch',
                }}
                initial={{ y: -20, opacity: 0, position: 'absolute' }}
                animate={{ y: 0, opacity: 1, position: 'static' }}
                key={currentQuestion?.remaining}
              >
                {currentQuestion?.remaining}
              </motion.strong>
            </AnimatePresence>{' '}
            Fragen bis zum perfekten Wein!
          </StyledCounter>
          <Link href="/landing-page" passHref>
            <BackArrow>&larr;</BackArrow>
          </Link>
          <BackText>Zur??ck</BackText>
        </>
      )}
      <QuizNavBar />
    </AppContainer>
  );
};

export default Question;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;

const StyledQuestion = styled.h1`
  margin: 1.5rem 0em 1rem 0rem;
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const AnswerButton = styled(motion.button)`
  width: 100%;
  padding: 30px 20px;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  color: black;
`;

const StyledCounter = styled.div`
  color: white;
  font-size: 17px;
  margin-top: 1rem;
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
  :active {
    color: red;
  }
`;

const BackText = styled.p`
  color: white;
`;

const ResultButton = styled.button`
  font-size: 30px;
  font-weight: 500;
  margin-top: 8.5rem;
  color: white;
  background-color: rgba(109, 19, 40);
  border-radius: 9px;
  height: 65px;
  width: 230px;
  border: none;
  position: relative;
  z-index: 2;
  :active {
    color: rgba(89, 199, 72, 1);
    border: 2px solid rgba(89, 199, 72, 1);
  }
`;

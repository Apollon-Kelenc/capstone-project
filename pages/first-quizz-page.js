import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';

export default function Foodlist() {
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
        <StyledHeader>Was möchtest du Essen?</StyledHeader>
        <Container>
          <FoodButton>Seafood</FoodButton>
          <Link href="/meat-quizz-page">
            <FoodButton>Fleisch</FoodButton>
          </Link>
          <FoodButton>Vegetarisch</FoodButton>
          <FoodButton>Käse</FoodButton>
          <FoodButton>Dessert</FoodButton>
          <FoodButton>Pasta</FoodButton>
        </Container>
        <Link href="/landing-page">
          <BackArrow>&larr;</BackArrow>
        </Link>
        <StyledCounter>
          Noch <strong>3</strong> Fragen bis zum perfekten Wein!
        </StyledCounter>
      </AppContainer>
    </>
  );
}

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
  transition: 0.3s;
  :hover {
    border: 3px solid black;
    font-size: large;
    border-color: rgba(89, 199, 72, 1);
  }
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

const BackArrow = styled.button`
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  font-size: 40px;
  margin-top: 2.5rem;
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
  color: white;
  margin-top: 4rem;
  font-size: 19px;
`;

const ImageContainer = styled.div`
  height: 183px;
  width: 100%;
  position: relative;
`;

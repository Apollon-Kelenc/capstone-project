import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';

export default function Foodlist() {
  return (
    <AppContainer>
      <Image src={header_picture} alt="wine picture" />
      <StyledHeader>Was möchtest du Essen?</StyledHeader>
      <Container>
        <FoodButton>Seafood</FoodButton>
        <FoodButton>Fleisch</FoodButton>
        <FoodButton>Vegetarisch</FoodButton>
        <FoodButton>Käse</FoodButton>
        <FoodButton>Dessert</FoodButton>
        <FoodButton>Pasta</FoodButton>
      </Container>
      <BackArrow>&larr;</BackArrow>
      <StyledFooter>Noch 3 Fragen bis zum perfekten Wein!</StyledFooter>
    </AppContainer>
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
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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
  margin-top: 1.5rem;
  padding-bottom: 5px;
  transition: 0.8s;
  :hover {
    color: white;
  }
`;

const StyledHeader = styled.h1`
  margin: 2rem 2rem;
  font-size: 27px;
  font-weight: 500;
`;

const StyledFooter = styled.footer`
  color: white;
  margin-top: 1.5rem;
  font-size: 18px;
`;

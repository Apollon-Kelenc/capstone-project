import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function WineCellarPage({ boughtWine }) {
  const [count, setCount] = useState(0);

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
        <StyledHeader>Dein Weinkeller</StyledHeader>
        {boughtWine.map(wine => (
          <>
            <WineCard>
              <WinePictureContainer>
                <Image
                  src={wine.src}
                  alt="wine picture"
                  layout={'responsive'}
                  height={50}
                  width={15}
                />
              </WinePictureContainer>
              <WineButtonsAndNameContainer>
                <WineName>{wine.name}</WineName>
                <WineButtonsAndAmountContainer>
                  <StyledIncreaseButton onClick={() => setCount(count + 1)}>
                    <Icon
                      icon="fluent:add-circle-16-regular"
                      color="#32a852"
                      width={50}
                      height={50}
                    />
                  </StyledIncreaseButton>
                  <p>{count}</p>
                  <StyledDeacreaseButton onClick={() => setCount(count - 1)}>
                    <Icon
                      icon="akar-icons:circle-minus"
                      color="#cd3c28"
                      width={40}
                      height={40}
                    />
                  </StyledDeacreaseButton>
                </WineButtonsAndAmountContainer>
              </WineButtonsAndNameContainer>
            </WineCard>
          </>
        ))}
        <NavBar>
          <Link href="/quiz/start" passHref>
            <StyledQuizButton>Q</StyledQuizButton>
          </Link>
          <StyledWineGlasButton>
            <Link href="/bookmark-page" passHref>
              <Icon icon="emojione:wine-glass" width="43" height="43" />
            </Link>
          </StyledWineGlasButton>
          <StyledBarrelButton>
            <Link href="/wine-cellar-page" passHref>
              <Icon
                icon="tabler:barrel"
                color="#8a98a5"
                width="47"
                height="47"
              />
            </Link>
          </StyledBarrelButton>
        </NavBar>
      </AppContainer>
    </>
  );
}

const StyledIncreaseButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
`;

const StyledDeacreaseButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
  margin-left: 5px;
`;

const WineName = styled.p`
  margin: 1rem 0rem 0.5rem 1rem;
`;

const WineButtonsAndAmountContainer = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  gap: 10px;
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
`;

const StyledWineGlasButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #8a98a5;
  border: none;
  margin-top: 5px;
  background-color: rgba(31, 31, 35, 1);
`;

const StyledBarrelButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #8a98a5;
  border: none;
  margin-top: 3px;
  background-color: rgba(31, 31, 35, 1);
  border-bottom: 3px solid white;
  padding-top: 3px;
`;

const StyledHeader = styled.h1`
  margin: 1rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const WineCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem;
  width: 95%;
  height: fit-content;
  border: 1px #8a98a5 solid;
  border-radius: 10px;
  background-color: rgba(255, 255, 236, 1);
`;

const WinePictureContainer = styled.div`
  width: 2.7rem;
  margin: 20px;
`;

const WineButtonsAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 1rem 0rem 1rem 1rem;
  font-size: 18px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 3.5rem;
  background-color: #77818b;
`;

import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';

export default function WineCellarPage({ filteredWine }) {
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
        {filteredWine.map(wine => (
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
                <p>{wine.name}</p>
                <WineButtonsAndAmountContainer>
                  <StyledIncreaseButton>
                    <Icon
                      icon="fluent:add-circle-16-regular"
                      color="#32a852"
                      width={50}
                      height={50}
                    />
                  </StyledIncreaseButton>
                  <p>1</p>
                  <StyledDeacreaseButton>
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
          <Link href="/landing-page" passHref>
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
  display: flex;
  align-items: center;
  border: none;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
`;

const StyledDeacreaseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: rgba(255, 255, 236, 1);
  border-radius: 50%;
  margin-left: 5px;
`;

const WineButtonsAndAmountContainer = styled.div`
  font-size: 24px;
  display: flex;
  align-self: center;
  align-items: center;
  margin: auto;
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
  :hover {
    border-bottom: 3px solid white;
    margin-top: 1px;
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

const StyledHeader = styled.h1`
  margin: 1rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const WineCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  align-items: center;
  row-gap: 1rem;
  font-size: 19px;
  font-weight: bold;
`;

const WineInformationContainer = styled.div``;
const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #77818b;
`;

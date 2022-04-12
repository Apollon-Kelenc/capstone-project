import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';
import { wine } from '../lib/wine';
import example_picture from '/public/wine/Acquesi Asti.png';

export default function BookmarkPage({ filteredWine }) {
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
        <StyledHeader>Von dir Ausgesucht</StyledHeader>
        <WineCard>
          <WinePictureContainer>
            <Image
              src={example_picture}
              alt="wine picture"
              layout={'fill'}
              objectFit={'contain'}
            />
          </WinePictureContainer>
          <WineName>Acquesi Asti</WineName>
          <WineInformation>
            <p>Pasta</p>
            <p>Pasta</p>
            <p>Pasta</p>
            <p>Pasta</p>
          </WineInformation>
        </WineCard>
        <NavBar>
          <StyledQuizButton>Q</StyledQuizButton>
          <div>
            <Icon icon="emojione:wine-glass" width="43" height="43" />
          </div>
          <div>
            <Icon icon="tabler:barrel" color="#8a98a5" width="47" height="47" />
          </div>
        </NavBar>
      </AppContainer>
    </>
  );
}

const NavBar = styled.footer`
  position: absolute;
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
  }
`;
const StyledHeader = styled.h1`
  margin: 2rem 2rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const WineCard = styled.div`
  width: 95%;
  height: fit-content;
  border: 2px rgba(31, 31, 35, 1) solid;
  border-radius: 20px;
`;

const WinePictureContainer = styled.div`
  height: 160px;
  width: 4rem;
  margin: 1rem 0rem 0rem 2rem;
  position: relative;
  border: 2px solid black;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
`;

const WineName = styled.p`
  margin: 1rem 0rem 0rem 7rem;
  padding-bottom: 2rem;
  font-size: 20px;
  font-weight: 700;
`;

const WineInformation = styled.p`
  position: relative;
  align-self: flex-end;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`;

const ImageContainer = styled.div`
  height: 183px;
  width: 100%;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgba(94, 91, 91);
`;

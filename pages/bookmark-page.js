import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';

export default function BookmarkPage({ savedWine }) {
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
          <WineInformation>
            <WinePictureContainer>
              <Image
                src={savedWine[0].src}
                alt="wine picture"
                layout={'responsive'}
                height={55}
                width={15}
              />
            </WinePictureContainer>
            <WineName>
              <li>{savedWine[0].name}</li>
              <WineType>Art:</WineType>
              <li>{savedWine[0].type}</li>
              <li>
                <WineFitsTo>Passt zu:</WineFitsTo>
                {savedWine[0].pairsWith}
              </li>
              <WineTasteProfileContainer>
                <WineTasteProfile>
                  {savedWine[0].tasteProfile[0]}
                </WineTasteProfile>
                <WineTasteProfile>
                  {savedWine[0].tasteProfile[1]}
                </WineTasteProfile>
                <WineTasteProfile>
                  {savedWine[0].tasteProfile[2]}
                </WineTasteProfile>
              </WineTasteProfileContainer>
            </WineName>
          </WineInformation>
        </WineCard>
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
const WineFitsTo = styled.p`
  font-weight: 500;
  margin-top: 0.5rem;
`;

const WineType = styled.p`
  font-weight: 500;
  margin-top: 0.5rem;
`;
const StyledWineGlasButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 45px;
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
  font-size: 45px;
  color: #8a98a5;
  border: none;
  margin-top: 5px;
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
  width: 95%;
  height: fit-content;
  border: 1px #8a98a5 solid;
  border-radius: 10px;
  background-color: rgba(255, 255, 236, 1);
`;

const WinePictureContainer = styled.div`
  width: 2.7rem;
  margin: 25px;
`;

const WineName = styled.ul`
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: bold;
  list-style-type: none;
`;

const WineTasteProfileContainer = styled.p`
  position: relative;
  align-self: flex-end;
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const WineTasteProfile = styled.div`
  font-weight: 500;
`;
const WineInformation = styled.div`
  display: flex;
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

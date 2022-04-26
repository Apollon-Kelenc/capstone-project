import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import header_picture from '/public/header-picture.jpeg';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import BookmarkNavBar from '../components/NavBar/BookmarkNavBar';

export default function BookmarkPage({ savedWine, setBoughtWine }) {
  function saveBoughtWine() {
    setBoughtWine([...savedWine]);
  }
  const { enqueueSnackbar } = useSnackbar();

  const saveWineAlert = () => {
    enqueueSnackbar('Der Wein liegt nun im Weinkeller!', {
      variant: 'success',
      autoHideDuration: 1500,
    });
  };

  function handleClick() {
    saveBoughtWine();
    saveWineAlert();
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
        <StyledHeader>Von dir ausgesucht</StyledHeader>
        {savedWine?.map(wineCard => {
          return (
            <>
              <WineCard>
                <WineInformation>
                  <WinePictureContainer>
                    <Image
                      src={wineCard.src}
                      alt="wine picture"
                      layout={'responsive'}
                      height={55}
                      width={15}
                    />
                  </WinePictureContainer>
                  <Wine>
                    <li>{wineCard.name}</li>
                    <WineType>Art:</WineType>
                    <li>{wineCard.type}</li>
                    <li>
                      <WineFitsTo>Passt zu:</WineFitsTo>
                      {wineCard.pairsWith}
                    </li>
                    <WineTasteProfileContainer>
                      <WineTasteProfile>
                        {wineCard.tasteProfile[0]}
                      </WineTasteProfile>
                      <WineTasteProfile>
                        {wineCard.tasteProfile[1]}
                      </WineTasteProfile>
                      <WineTasteProfile>
                        {wineCard.tasteProfile[2]}
                      </WineTasteProfile>
                    </WineTasteProfileContainer>
                    <WineCardButtons>
                      <WineCellarButton onClick={handleClick}>
                        In den Weinkeller
                        <Icon
                          icon="tabler:barrel"
                          color="#8a98a5"
                          width="30"
                          height="30"
                        />
                      </WineCellarButton>
                      <WineBuyButton>{wineCard.url}</WineBuyButton>
                    </WineCardButtons>
                  </Wine>
                </WineInformation>
              </WineCard>
            </>
          );
        })}
        <BookmarkNavBar />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  height: 145px;
  width: 100%;
  position: relative;
`;

const StyledHeader = styled.h1`
  margin: 1rem;
  font-size: 27px;
  font-weight: 500;
  color: white;
`;

const WineCard = styled.div`
  margin-bottom: 1rem;
  width: 95%;
  height: fit-content;
  border: 1px #8a98a5 solid;
  border-radius: 10px;
  background-color: rgba(255, 255, 236, 1);
`;

const WineInformation = styled.div`
  display: flex;
`;

const WinePictureContainer = styled.div`
  width: 2.7rem;
  margin: 25px;
`;

const Wine = styled.ul`
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: bold;
  list-style-type: none;
`;

const WineType = styled.p`
  font-weight: 500;
  margin-top: 0.5rem;
`;

const WineFitsTo = styled.p`
  font-weight: 500;
  margin-top: 0.5rem;
`;

const WineTasteProfileContainer = styled.p`
  position: relative;
  align-self: flex-end;
  display: flex;
  gap: 10px;
  margin: 1rem 0rem 1.4rem 0rem;
`;

const WineTasteProfile = styled.div`
  font-weight: 500;
`;

const WineCardButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 8px;
  gap: 2rem;
  height: 2.5rem;
`;

const WineCellarButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 9px;
  border: none;
  padding-left: 4px;
  background-color: rgba(31, 31, 34, 1);
  color: white;
  transition: 0.1s;
  :active {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

const WineBuyButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 236, 1);
`;

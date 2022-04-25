import { Icon } from '@iconify/react';
import Link from 'next/link';
import styled from 'styled-components';

export default function QuizNavBar() {
  return (
    <>
      <StyledNavbar>
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
            <Icon icon="tabler:barrel" color="#8a98a5" width="47" height="47" />
          </Link>
        </StyledBarrelButton>
      </StyledNavbar>
    </>
  );
}

const StyledQuizButton = styled.button`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 42px;
  padding-bottom: 7px;
  color: #8a98a5;
  border: none;
  background-color: rgba(31, 31, 35, 1);
  border-bottom: 3px solid white;
  margin-top: 1px;
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
`;

const StyledNavbar = styled.footer`
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

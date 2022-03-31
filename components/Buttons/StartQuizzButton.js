import styled from 'styled-components';
import Link from 'next/link';

export default function StartButton() {
  <StartQuizzButton></StartQuizzButton>;
}

const StartQuizzButton = styled.button`
  font-size: 31px;
  font-weight: 500;
  margin-top: 3.5rem;
  color: white;
  background-color: rgba(32, 32, 36, 1);
  border: 0.5px solid white;
  border-radius: 9px;
  height: 75px;
  width: 300px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2), -2px -2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  :hover {
    border-color: rgba(89, 199, 72, 1);
    color: rgba(89, 199, 72, 1);
  }
`;

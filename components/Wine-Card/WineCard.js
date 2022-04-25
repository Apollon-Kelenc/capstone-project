import { Icon } from '@iconify/react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

export default function WineCard({ src, name }) {
  const [count, setCount] = useState(0);

  function handleIncreaseClick() {
    setCount(count + 1);
  }
  function handleDecreaseClick() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <WineCardContainer>
        <WinePictureContainer>
          <Image
            src={src}
            alt="wine picture"
            layout={'responsive'}
            height={50}
            width={15}
          />
        </WinePictureContainer>
        <WineButtonsAndNameContainer>
          <WineName>{name}</WineName>
          <WineButtonsAndAmountContainer>
            <StyledIncreaseButton onClick={handleIncreaseClick}>
              <Icon
                icon="fluent:add-circle-16-regular"
                color="#32a852"
                width={50}
                height={50}
              />
            </StyledIncreaseButton>
            <p>{count}</p>
            <StyledDeacreaseButton onClick={handleDecreaseClick}>
              <Icon
                icon="akar-icons:circle-minus"
                color="#cd3c28"
                width={40}
                height={40}
              />
            </StyledDeacreaseButton>
          </WineButtonsAndAmountContainer>
        </WineButtonsAndNameContainer>
      </WineCardContainer>
    </>
  );
}

const WineCardContainer = styled.div`
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

const WineButtonsAndAmountContainer = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  gap: 10px;
`;

const WineButtonsAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 1rem 0rem 1rem 1rem;
  font-size: 18px;
  font-weight: bold;
`;

const WineName = styled.p`
  margin: 1rem 0rem 0.5rem 1rem;
`;

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

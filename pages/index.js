import Head from 'next/head';
import LandingPage from './landing-page';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>In Vino Veritas</title>
        <meta name="In Vino Veritas App" />
      </Head>
      <StyledMain>
        <LandingPage></LandingPage>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  height: 100vh;
`;

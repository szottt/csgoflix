import React from 'react';
import styled, { css } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll}}
  `}
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Header />
    <Main paddingAll={paddingAll}>{children}</Main>
    <Footer />
  </>
);

export default PageDefault;

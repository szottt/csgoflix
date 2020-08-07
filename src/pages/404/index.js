import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import PageDefault from '../../components/PageDefault';
import C4 from '../../assets/img/c4.jpeg';

const Erro = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align: center;

    h1 {
      margin-bottom: 70px;
    }
  }
`;
const Erro404 = () => {
  const url = C4;
  return (
    <PageDefault>
      <Erro>
        <div>
          <h1>Opss! Página não encontrada</h1>
          <Iframe url={url} width="500px" height="500px" overflow="hidden" />
        </div>
      </Erro>
    </PageDefault>
  );
};

export default Erro404;

import React, { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setData(categoriasComVideos);
      })

      .catch((err) => {
        console.log(err.message);
      });
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageDefault paddingAll={0} style={{ backgrounColor: '#141414' }}>
      {data.length === 0 && (
        <Div>
          <CircleLoader size={25} color="#DC1A28" />
        </Div>
      )}

      {data.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={data[0].videos[0].titulo}
                url={data[0].videos[0].url}
                videosDescription="Um pouco de um dos melhores videos de HighLights de CSGO"
              />
              <Carousel
                ignoreFirstVideo
                category={data[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  align-items: center;
  `;

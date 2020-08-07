import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/video';
import categoriasRepository from '../../../repositories/categorias';
import FormField from '../../../components/FormField';

function NovoVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFormServer) => {
      setCategorias(categoriasFormServer);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(() => {
        history.push('/');
      });
  }

  function handleClear(event) {
    event.preventDefault();
    clearForm();
  }

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Novo vídeo</h1>

        <FormField
          id="titulo"
          label="Título do vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          id="url"
          label="Link do vídeo"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          id="categoria"
          label="Escolha um acategoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <ButtonCategory>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar" onClick={handleClear}>
            Limpar
          </Button>
        </ButtonCategory>
      </form>
      <ToastContainer />
    </PageDefault>
  );
}

export default NovoVideo;

const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`;

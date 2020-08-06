import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('titulo'),
      infosDoEvento.target.value,
    );
  }

  function clearFOrm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearFOrm,
  };
}

export default useForm;

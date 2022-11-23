import React, { useEffect, useState } from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((res) => res.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>Preço R${dados.preco}</p>
    </>
  );
};

export default Produto;

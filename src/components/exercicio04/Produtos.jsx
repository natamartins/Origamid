import React from 'react';

export const Produtos = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.descricao}</p>
      <p>Preço: {dados.preco}</p>
      <img src={dados.fotos[0].src} alt="" />
    </div>
  );
};

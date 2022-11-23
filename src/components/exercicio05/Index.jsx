import React, { useEffect, useState } from 'react';
import Produto from './Produto';

const Index = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  const handleClick = (e) => {
    setProduto(e.target.innerText);
  };

  return (
    <>
      <h1>Preferencia: {produto}</h1>
      <div>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
      </div>
      <Produto produto={produto} />
    </>
  );
};

export default Index;

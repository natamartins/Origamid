import React, { useState } from 'react';
import { Produtos } from './Produtos';

const Index = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);
  async function handleFetch(e) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const data = await response.json();
    setDados(data);
    setLoading(false);
  }
  return (
    <div>
      <h1>Produtos</h1>
      <div>
        <button onClick={handleFetch}>Notebook</button>
        <button onClick={handleFetch}>Smartphone</button>
        <button onClick={handleFetch}>Tablet</button>
      </div>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produtos dados={dados} />}
    </div>
  );
};

export default Index;

// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

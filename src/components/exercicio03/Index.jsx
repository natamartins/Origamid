const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

export const Index = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <h2>
        {produtos.map((res) => (
          <li>
            {res.nome}
            {res.propriedades}
          </li>
        ))}
      </h2>
    </div>
  );
};

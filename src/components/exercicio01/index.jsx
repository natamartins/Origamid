const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const Exercico01 = () => {
  const dados = mario;
  // const dados = luana;

  const data = dados.compras
    .map((res) => Number(res.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <h1>Nome: {dados.cliente}</h1>
      <h2>Idade: {dados.idade}</h2>
      <h2>
        Situacão:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? ' Ativo' : ' Inativo'}
        </span>
      </h2>
      <h2>Total gasto: {data}</h2>
      <h2>{data > 10000 && 'Ops! você passou do seu limite'}</h2>
    </div>
  );
};

export default Exercico01;

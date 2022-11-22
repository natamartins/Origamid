const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Exercico02 = () => {
  const price = produtos.filter(({ preco }) =>
    Number(preco.replace('R$ ', '') > 1500),
  );

  console.log(price);
  return (
    <>
      <div className="ex02">
        <h1>Produtos</h1>
        <ul>
          {price.map(({ nome, preco, cores, id }) => (
            <li key={(nome, id, preco, cores)}>
              {id} = {nome} , {preco} ,{' '}
              {cores.map((cor) => (
                <li key={cor} style={{ background: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Exercico02;

import React, { useState } from 'react';
import Radios from './Radios';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Index = () => {
  const [respostas, setResposta] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = useState(0);
  const [resultado, setResuiltado] = useState(null);

  function handleChange(e) {
    setResposta({ ...respostas, [e.target.id]: e.target.value });
  }

  function handleResult() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResuiltado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      handleResult();
    }
  }

  return (
    <div>
      <h1>Quiz Origamid</h1>

      {perguntas.map((pergunta, index) => (
        <Radios
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          {...pergunta}
          onChange={handleChange}
        />
      ))}
      {resultado ? (
        <h2>{resultado}</h2>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </div>
  );
};

export default Index;

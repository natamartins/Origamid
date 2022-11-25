import React, { useState } from 'react';
import './style.css';

const formFilds = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Sennha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    tyoe: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    tyoe: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    tyoe: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    tyoe: 'text',
  },
  {
    id: 'estado',
    label: 'Esatdo',
    tyoe: 'text',
  },
];

const Index = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function handleClick(e) {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((res) => console.log(res));
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      {formFilds.map(({ id, label, type }) => (
        <form className="container-form" key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </form>
      ))}
      <h1>{}</h1>
      <button onClick={handleClick}>Enviar</button>
    </>
  );
};

export default Index;

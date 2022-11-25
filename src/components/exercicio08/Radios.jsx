const Radios = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;

  return (
    <>
      <fieldset style={{ padding: '20px' }}>
        <legend>{pergunta}</legend>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              checked={value === option}
              value={option}
              id={id}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Radios;

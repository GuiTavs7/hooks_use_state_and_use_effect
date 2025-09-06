import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [inputs, setInputs] = useState({
    value: '',
    suit: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mapeamento de abreviações
    const valueMap = {
      'A': 'A', 'J': 'J', 'Q': 'Q', 'K': 'K',
      '10': '0', '9': '9', '8': '8', '7': '7',
      '6': '6', '5': '5', '4': '4', '3': '3', '2': '2'
    };

    const suitMap = {
      'espadas': 'S',
      'copas': 'H',
      'ouros': 'D',
      'paus': 'C'
    };

    const valueCode = valueMap[inputs.value.toUpperCase()] || inputs.value.toUpperCase();
    const suitCode = suitMap[inputs.suit.toLowerCase()] || inputs.suit.toUpperCase();

    const code = `${valueCode}${suitCode}`;
    const imageUrl = `https://deckofcardsapi.com/static/img/${code}.png`;

    const newCard = {
      image: imageUrl,
      value: inputs.value,
      suit: inputs.suit
    };

    props.addCard(newCard);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="value">Nome da Carta</label>
        <input
          type="text"
          id="value"
          name="value"
          placeholder="Ex: A, K, Q, J, 10..."
          onChange={handleInputChange}
          value={inputs.value}
          className="input-text"
        />
      </div>
      <div>
        <label htmlFor="suit">Naipe da Carta</label>
        <input
          type="text"
          id="suit"
          name="suit"
          placeholder="S, H, D, C ou espadas, etc..."
          onChange={handleInputChange}
          value={inputs.suit}
          className="input-text"
        />
      </div>
      <input type="submit" value="Adicionar Carta" className="btn-submit" />
    </form>
  );
};

export default Form;
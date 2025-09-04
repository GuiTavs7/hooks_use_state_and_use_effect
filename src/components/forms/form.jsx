import { useState } from 'react';
import './form.css';

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) => {

        console.log(event.target.name);

        const { target } = event;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //previne a atualização da página ao enviar o formulário
        props.addCard(inputs);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Link da Imagem</label>
                <input type="text" id="image" name="image" className="input-text" onChange={handleInputChange} value={inputs.image}/>
            </div>
             <div>
                <label htmlFor="value">Nome da Carta</label>
                <input type="text" id="value" name="value" className="input-text" onChange={handleInputChange} value={inputs.value}/>
            </div>
             <div>
                <label htmlFor="suit">Naipe da Carta</label>
                <input type="text" id="suit" name="suit" className="input-text" onChange={handleInputChange} value={inputs.suit}/>
            </div>
            <input type="submit" className="btn-submit"/>
        </form>
        </>
    )
}

export default Form;
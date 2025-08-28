import { useState } from 'react';
import './form.css';

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: ''
    })

    const handleInputChange = (event) => {
        setInputs({
            image: event.target.value
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
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" className="input-text" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <input type="submit" className="btn-submit"/>
        </form>
        </>
    )
}

export default Form;
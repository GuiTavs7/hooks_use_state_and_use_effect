import { Component } from 'react';
import './panel.css';

class Panel extends Component{

    constructor(){

        //sempre usar o método super() nos componentes de classe

        super()
        this.state = {
            title: 'API - Baralho'
        }
    }

    render(){
        return(
            <section className="panel" onClick={() => this.setState({title: 'API - Baralho'})}>
                <h2>{this.state.title}</h2>
            </section>
        )
    }

    /* 2) Como seria usar o "this" para se referir ao nosso componente sem as arrow functions?

    render(){

        2.1) É necessário declarar o "this" como uma variável neste caso, caso contrário ele será do tipo "undefined"

        const thisComponent = this 

        return(
            <section className="panel" onclick={
                function(){
                    thisComponent.setState(
                        {title: 'Título Novo'}
                    )
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }

        2.2) Graças ao ES6 (Ecma Script 6 - Atualização do JS), podemos usar o this como no bloco descomentado!

    */

}

export default Panel;
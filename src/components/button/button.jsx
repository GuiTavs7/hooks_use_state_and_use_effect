import './button.css'

const sayHello = () => {
  window.alert("Olá! Parabéns por interagir com o botão!");
}

const Button = (props) => {
  return <button className="btn" onClick={sayHello}>{props.label}</button>
}

/* Componente de Classe

  class Button extends React.Component {

    render() {
      return <button className="btn">{this.props.label}</button>
    }

  }

*/

Button.defaultProps = {
  label: 'Clique aqui',
}

export default Button;
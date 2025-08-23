//import { Component } from "react";
import PropTypes from 'prop-types';
import './card.css';



const Card = ({children, color, showCardColor}) => {
  return (
    <div 
    className="card"
    style={{ backgroundColor: color }} 
    onClick = {() => showCardColor(color)}>
      {children}
    </div>
  )
}

/* OBS: Assim também funciona

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

*/

// class Card extends Component{
//   render(){
//     return (
//       <div className="card">
//         <h3>{this.props.title}</h3>
//         <p>Esse é um texto do card</p>
//       </div>
//     )
//   }
// }


// Aqui é só uma validação para garantir que o componente seja usado corretamente, não é obrigatório
Card.propTypes = {
  children: PropTypes.node.isRequired
}

Card.defaultProps = {
  color: 'orange'
}

export default Card;
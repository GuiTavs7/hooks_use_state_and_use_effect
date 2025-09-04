import { useState, useEffect } from "react";
import './deck-of-cards.css';
import Form from '../forms/form';

async function createDeck(){
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deck = await response.json();
    return deck.deck_id;
}

async function getCards(deckId){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    return await response.json();
}

const CardsList = (props) => {
    return (
        <ul>
            { 
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value}/>
                            <p>{card.value} {card.suit}</p>
                        </li>   
                    )
                })
            }
        </ul>
    )
}

const DeckOfCards = () => {

  const [deck, setDeck] = useState({
    cards: []
  })


  useEffect(() => {
    const fetchData = async () =>{
      const deckId = await createDeck();
      const data = await getCards(deckId);

      setDeck({
        cards: data.cards
      })
    }
    fetchData();
  }, [])       

  // Vamos usar o operador spread nessa função -> criando um array novo a partir do estado anterior.

  const addCard = (newCard) => {
    console.log(newCard);
    setDeck({
      cards: [...deck.cards, newCard]
    })
  }

    
// Usando o operador ternário para uma renderização condicional"
  

  return(
     <section className="deck-of-cards">
        <Form addCard={addCard}/>
        {deck.cards.length > 0 ? <CardsList cards={deck.cards}/> : "Nenhuma carta encontrada!"}
      </section>
  )

}

export default DeckOfCards; 
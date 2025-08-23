import Card from '../card/card';

const cardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3'];

const showCardColor = (color) => {
    window.alert(`Você clicou em um card da cor: ${color}`);
}

const Cards = () => {
    return (
        <>   
            <h2 className = "cards-title">Meus Cards</h2>

            <div>
      
                <div className="cards">
                    {
                        cardsTitle.map((cardTitle, index) => (
                            <Card key={index} showCardColor={showCardColor}>
                                <h3>{cardTitle}</h3>
                                <p>Esse é um texto do card</p>
                            </Card>
                        ))
                    }
                
                    <Card color='blue' showCardColor={showCardColor}>
                        <h3>Card com fundo azul</h3>
                        <p>Esse é um texto do card</p>
                    </Card>
                </div>
            </div>
        </>
    )
}

/* 2) Exemplo do "Cards" sem as listas

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>

            <div>
                <Card>
                    <h3>Título card 1</h3>
                    <p>Esse é um texto do card 1</p>
                </Card>

                <Card>
                    <h3>Título card 2</h3>
                    <p>Esse é um texto do card 2</p>
                </Card>

                <Card>
                    <h3>Título card 3</h3>
                    <p>Esse é um texto do card 3</p>
                </Card>
            </div>
        </div>
    )
}

*/

export default Cards;
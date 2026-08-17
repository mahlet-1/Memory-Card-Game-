import Card from './Card';
export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="game-board">
      {cards.map((pokemon) => (
        <Card 
          key={pokemon.id} 
          pokemon={pokemon} 
          onCardClick={onCardClick} 
        />
      ))}
    </div>
  );
}
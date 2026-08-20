import '../Styles/GameBoard.css'
import Card from './Card';

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="game-container">
      <div className="top-text">
        <p>Status: Playing</p>
      </div>

      <div className="game-board">
        {cards.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onCardClick={onCardClick}
          />
        ))}
      </div>
      <div className="bottom-text">
        <p> CAN YOU BEAT YOUR BEST SCORE? </p>
      </div>
    </div>
  );
}
export default function Card({ pokemon, onCardClick }) {
  return (
    <div className="memory-card" onClick={() => onCardClick(pokemon.id)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <span className="card-name">{pokemon.name}</span>
    </div>
  );
}
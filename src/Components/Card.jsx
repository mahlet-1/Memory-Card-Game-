export default function Card({ pokemon, onCardClick }) {
  return (
    <div className="card">
        onClick={() => onCardClick(pokemon.id)}
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
    </div>
  );
}
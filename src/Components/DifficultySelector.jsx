export default function DifficultySelector({ setDifficulty }) {
  return (
    <div className="difficulty-selector">
      <button onClick={() => setDifficulty()}>Easy (8 cards)</button>
      <button onClick={() => setDifficulty()}>Medium (12 cards)</button>
      <button onClick={() => setDifficulty()}>Hard (20 cards)</button>
    </div>
  );
}
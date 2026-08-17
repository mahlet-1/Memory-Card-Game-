export default function DifficultySelector({ setDifficulty }) {
  return (
    <div className="difficulty-container">
      <h2>Select Difficulty</h2>
      <div className="difficulty-buttons">
        <button onClick={() => setDifficulty(8)}>Easy (8 Cards)</button>
        <button onClick={() => setDifficulty(12)}>Medium (12 Cards)</button>
        <button onClick={() => setDifficulty(20)}>Hard (20 Cards)</button>
      </div>
    </div>
  );
}
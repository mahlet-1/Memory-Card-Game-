import '../Styles/DifficultySelector.css'
export default function DifficultySelector({ setDifficulty }) {
  return (
    <div className="difficulty-overlay">
      <div className="difficulty-card">
        <h2>POKMEMO MEMORY GAME </h2>
        <p className="game-description">
          Test your memory! Click on unique Pokémon cards without repeating any. How high can you score?
        </p>
        
        <h3>SELECT DIFFICULTY</h3>
        <div className="button-group">
          <button className="diff-btn easy" onClick={() => setDifficulty(6)}>
            Easy <span className="card-count">(6 Cards)</span>
          </button>
          <button className="diff-btn medium" onClick={() => setDifficulty(10)}>
            Medium <span className="card-count">(10 Cards)</span>
          </button>
          <button className="diff-btn hard" onClick={() => setDifficulty(15)}>
            Hard <span className="card-count">(15 Cards)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
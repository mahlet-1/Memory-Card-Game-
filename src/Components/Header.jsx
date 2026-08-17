export default function Header({ score, bestScore }) {
  return (
    <header className="header-container">
      <div className="app-title">
        <h1>Pokememo</h1>
        <p>Catch 'em all, but don't click the same one twice!</p>
      </div>
      <div className="score-board">
        <p>Score:{score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
import '../Styles/Header.css'

export default function Header({ score, bestScore }) {
  return (
    <header className="header-container">
      <h1 className="game-title">Pokmemo</h1>
      <div className="score-board">
        <p>Score: <span>{score}</span></p>
        <p>Best Score: <span>{bestScore}</span></p>
      </div>
    </header>
  );
}
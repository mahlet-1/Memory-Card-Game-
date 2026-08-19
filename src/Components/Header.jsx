import '../Styles/Header.css'

export default function Header({ score, bestScore, onPlayAgain, onRestart}) {
  return (
    <header className="header-container">
      <h1 className="game-title">Pokmemo</h1>
      <div className="score-board">
        <p>Score: <span>{score}</span></p>
        <p>Best Score: <span>{bestScore}</span></p>
      </div>
        <div className="header-actions">
        <button className="header-btn" onClick={onPlayAgain}>Restart</button>
        <button className="header-btn" onClick={onRestart}>Quit</button>
      </div>
    </header>
  );
}
import '../Styles/Header.css';
import PokLogo from '../assets/PokLogo.png';

export default function Header({ score, bestScore, onPlayAgain, onRestart}) {
  return (
    <header className="header-box">
      <div className="header-left">
        <img src={PokLogo} alt="Pokmemo Logo" className="game-logo" />
        <h1 className="game-title">Pokmemo</h1>
      </div>

      <div className="score-board">
        <p>Score: <span>{score}</span></p>
        <p>Best Score: <span>{bestScore}</span></p>
      </div>

      <div className="header-actions">
        <button className="header-btn " onClick={onPlayAgain}>Restart</button>
        <button className="header-btn " onClick={onRestart}>Quit</button>
      </div>
    </header>
  );
}
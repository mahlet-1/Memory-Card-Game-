import '../Styles/GameOverModal.css'
export default function GameOverModal({ onPlayAgain }) {
  return (
    <div className="over-modal-overlay">
      <div className="over-modal-content">
        <h2>GAME OVER </h2>
        <p>Oops! You already clicked that card. Better luck on your next try!</p>
        <button className = "game-over-btn" onClick={onPlayAgain}>TRY AGAIN</button>
      </div>
    </div>
  );
}
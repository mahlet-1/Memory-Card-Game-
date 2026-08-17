export default function GameOverModal({ onPlayAgain }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Over</h2>
        <p>Oops! You already clicked that Pokemon. Better luck on your next try!</p>
        <button onClick={onPlayAgain}>Try Again</button>
      </div>
    </div>
  );
}
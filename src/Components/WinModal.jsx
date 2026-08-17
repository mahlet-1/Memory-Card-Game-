export default function WinModal({ onPlayAgain }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Victory!</h2>
        <p>Congrats! You successfully caught all the Pokemon.</p>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}
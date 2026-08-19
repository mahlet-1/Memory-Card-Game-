import '../Styles/WinModal.css'
export default function WinModal({ onPlayAgain }) {
  return (
    <div className="win-modal-overlay">
      <div className="win-modal-content">
        <h2>VICTORY!</h2>
        <p>Congrats! You successfully caught all the Pokemon Cards.</p>
        <button className="win-btn" onClick={onPlayAgain}>PLAY AGAIN</button>
      </div>
    </div>
  );
}
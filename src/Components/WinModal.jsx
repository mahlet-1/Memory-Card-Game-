import '../Styles/WinModal.css'
export default function WinModal({ onPlayAgain, onRestart}) {
  return (
    <div className="win-modal-overlay">
      <div className="win-modal-content">
        <h2>VICTORY!</h2>
        <p>Congrats! You successfully caught all the Pokemon Cards.</p>
        <button className="win-btn" onClick={onPlayAgain}>PLAY AGAIN</button>
        <button className="menu-btn" onClick={onRestart}> MAIN MENU</button>
      </div>
    </div>
  );
}
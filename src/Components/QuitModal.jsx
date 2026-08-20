import '../Styles/QuitModal.css';
export default function QuitModal({ onQuit, onCancelQuit }) {
  return (
    <div className="quit-modal-overlay">
      <div className="quit-modal-content">
        <h2>Are you sure you want to quit?</h2>
        <p>Your current game progress will be lost!</p>
        <div className="quit-btn">
          <button className='yes-btn' onClick={onQuit}>Yes</button>
          <button className='no-Btn' onClick={onCancelQuit}>No</button>
        </div>
      </div>
    </div>
  );
}
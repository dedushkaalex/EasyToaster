import './Notification.css';

export function Notification({ message, type, onClose, key }) {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

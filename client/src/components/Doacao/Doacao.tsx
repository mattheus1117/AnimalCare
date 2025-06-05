import './Doacao.css';

export default function DoacaoPopup({ onClose }: { onClose: () => void }) {

  return (
    <div className="doacao-popup">
      <div className="doacao-header">
        <h3>Doação</h3>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="doacao-body">
        <p>Teste</p>
      </div>
      <div className="doacao-footer">
        <p>Teste</p>
      </div>
    </div>
  );
}

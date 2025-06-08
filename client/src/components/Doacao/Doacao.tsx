import { useState } from 'react';
import './Doacao.css';

export default function DoacaoPopup({ onClose }: { onClose: () => void }) {
  const [valor, setValor] = useState('');

  return (
    <div className="doacao-popup">
      <div className="doacao-header">
        Doação
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>

      <div className="doacao-body">
        <h4>Vantagens</h4>
        <ul>
          <li>Exclusividade nas filas de espera</li>
          <li>Notificações de novos animais para adoção</li>
          <li>Logo de assinatura ao lado do nickname</li>
        </ul>

        <label htmlFor="valor-input">Valor da doação</label>
        <input
          id="valor-input"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor que deseja doar"
        />
        <button className="doar-btn">
          DOAR R$ {valor ? parseFloat(valor).toFixed(2) : 'XX'}
        </button>
      </div>
    </div>
  );
}

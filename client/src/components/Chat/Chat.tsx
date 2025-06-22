import { useState } from 'react';
import './Chat.css';

export default function ChatPopup({ onClose }: { onClose: () => void }) {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState<string[]>([]);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      setMensagens([...mensagens, mensagem]);
      setMensagem('');
    }
  };

  return (
    <div className="chat-popup">      
      <div className="chat-header">
        <h3>Chat</h3>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
      <div className="chat-body">
        {mensagens.map((msg, index) => (
          <div key={index} className="chat-msg">{msg}</div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
}

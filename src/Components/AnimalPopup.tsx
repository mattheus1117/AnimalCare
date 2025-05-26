import './AnimalPopup.css';

export default function AnimalPopup({ animal, onClose }: { animal: any, onClose: () => void }) {
  return (
    <div className="animal-popup-overlay">
      <div className="animal-popup">
        <div className="animal-popup-left">
          <img src={animal.imagem} alt={animal.nome} />
        </div>
        <div className="animal-popup-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{animal.nome}</h2>
          <div className="info-grid">
            <div><strong>Peso</strong><br />{animal.peso}</div>
            <div><strong>Sexo</strong><br />{animal.sexo}</div>
            <div><strong>Espécie</strong><br />{animal.especie}</div>
            <div><strong>Idade</strong><br />{animal.idade}</div>
            <div><strong>Raça</strong><br />{animal.raca}</div>
            <div><strong>Porte</strong><br />{animal.porte}</div>
            <div><strong>Local</strong><br />{animal.cidade}, {animal.estado}</div>
            <div style={{ gridColumn: '1 / -1' }}>
              <strong>Sobre o pet</strong><br />{animal.descricao}
            </div>
          </div>
          <div className='btn-container'>
            <button className="btn-adotar">Quero adotar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

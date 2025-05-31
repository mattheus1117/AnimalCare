import './AnimalPopup.css';

interface Animal {
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    status: string;
    weight?: number;
    location?: string;
    description?: string;
}

interface AnimalPopupProps {
    animal: Animal;
    onClose: () => void;
}

export default function AnimalPopup({ animal, onClose }: AnimalPopupProps) {
  return (
    <div className="animal-popup-overlay">
      <div className="animal-popup">
        <div className="animal-popup-left">
          <img src={`data:image/jpeg;charset=utf-8;base64,${animal.pictureBase64}`} alt={animal.name} />
        </div>
        <div className="animal-popup-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{animal.name}</h2>
          <div className="info-grid">
            <div><strong>Peso</strong><br />{animal.weight}</div>
            <div><strong>Sexo</strong><br />{animal.gender}</div>
            <div><strong>Espécie</strong><br />{animal.kind}</div>
            <div><strong>Idade</strong><br />{animal.age}</div>
            <div><strong>Raça</strong><br />{animal.race}</div>
            <div><strong>Porte</strong><br />{animal.size}</div>
            <div><strong>Local</strong><br />{animal.location}</div>
            <div style={{ gridColumn: '1 / -1' }}>
              <strong>Sobre o pet</strong><br />{animal.description}
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

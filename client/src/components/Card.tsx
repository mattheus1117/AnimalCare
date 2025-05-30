interface Animal {
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    weight?: number;
    location?: string;
    description?: string;
}

interface CardProps {
    animal: Animal;
    onClick?: () => void;
}

export default function Card({ animal, onClick }: CardProps) {
    return (
        <div className="card" onClick={onClick}>
            <img src={animal.pictureBase64} alt={animal.name} className="card-img" />
            <div className="card-info">
                <h3>{animal.name}</h3>
                <p>{animal.location}</p>
                <button className="card-button">Mais Informações</button>
            </div>
        </div>
    );
}

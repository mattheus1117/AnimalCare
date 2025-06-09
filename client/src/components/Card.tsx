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

interface CardProps {
    animal: Animal;
    onClick?: () => void;
}

export default function Card({ animal, onClick }: CardProps) {
    if (animal.status == 'PD') {
        return (
            <div className="QAdota" onClick={onClick}>
                <img src={`data:image/jpeg;charset=utf-8;base64,${animal.pictureBase64}`} alt={animal.name} className="QAdota-img" />
                <div className="QAdota-info">
                    <h3>{animal.name}</h3>
                    <p>{animal.location}</p>
                    <button className="QAdota-button">Mais Informações</button>
                </div>
            </div>
        );
    }
}

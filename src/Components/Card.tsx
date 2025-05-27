interface CardProps {
    imagem: string;
    nome: string;
    estado: string;
    cidade: string;
    onClick: () => void;
}

export default function Card({ imagem, nome, estado, cidade, onClick }: CardProps) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="card-img" />
            <div className="card-info">
                <h3>{nome}</h3>
                <p>{cidade}, {estado}</p>
                <button className="card-button" onClick={onClick}>Mais Informações</button>
            </div>
        </div>
    );
}

export default function Card({ imagem, nome, estado, cidade }) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="card-img" />
            <div className="card-info">
                <h3>{nome}</h3>
                <p>{cidade}, {estado}</p>
                <button className="QadotarCard ">Quero Adotar</button>
            </div>
        </div>
    );
}

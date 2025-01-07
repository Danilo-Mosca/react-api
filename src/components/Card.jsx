// Importo i CSS Modules delle Card
import style from "./card.module.css";

/* Funzione che crea le Cards */
function Card({
    id,
    title,
    image = "https://picsum.photos/640/480",
    content,
    category,
    published,
    onDelete }) {

    return (
        <div className={`${style.cards} card col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3`}>


            {/* Operatore ternario che verifica la presenza dell'immagine e nel caso non fosse presente le assegna un'immagine casuale 600x400px dal sito https://picsum.photos/*/}
            {image === "" ?
                <img src={"https://picsum.photos/640/480"} className={`card-img-top ${style["img-custom"]}`} alt={title} />
                : <img src={`${image}`} className={`card-img-top ${style["img-custom"]}`} alt={title} />}


            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{content}</p>
                <p className={`card-text ${style["img-custom"]}`}>Categoria: {category==='' ? "Nessuna categoria selezionata" : category}</p>
                <p className=" card-text">
                    {published ? <span className={`${style["published-text"]}`}>Pubblicato</span> : <span className={`${style["not-published-text"]}`}>Non pubblicato</span>}
                </p>
                <button onClick={onDelete} className={`btn btn-primary ${style.btncustom}`}>Cancella</button>
            </div>
        </div>
    );
}

export default Card;
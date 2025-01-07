// Funzione che disegna il form per l'inserimento dati
function BlogForm({ handlerInput, handlerSubmit, handlerChangeCategory, post, categoriesAvaible }) {
    //parte html da ritornare
    return (
        <section className="my-4">
            <h2>Inserisci un articolo del blog</h2>
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="titlelHelp"
                        value={post.title}
                        onChange={handlerInput}
                        name="title"
                        placeholder="Titolo del post"
                    />
                    <div id="titlelHelp" className="form-text">
                        Il tuo articolo sarà pubblicato nel nostro blog!
                    </div>

                    <label htmlFor="image" className="form-label mt-3">
                        Url di un'immagine
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        aria-describedby="imagelHelp"
                        value={post.image}
                        onChange={handlerInput}
                        name="image"
                        placeholder="Url di una immagine"
                    />
                    <div id="imagelHelp" className="form-text">
                        Inserisci l'url di un'immagine
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Contenuto dell'articolo
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={post.content}
                        onChange={handlerInput}
                        name="content"
                        placeholder="Testo dell'articolo">
                    </textarea>
                </div>

                <select
                    className="form-select"
                    name="category"
                    onChange={handlerChangeCategory}>
                    <option value="Nessuna categoria selezionata">Seleziona una categoria</option>
                    {categoriesAvaible.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="published"
                        name="published"
                        onChange={handlerInput}
                        checked={post.published}
                    />
                    <label className="form-check-label" htmlFor="published">
                        Clicca qui se vuoi pubblicare subito, altrimenti lascialo in bozza
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    Inserisci articolo
                </button>
            </form>
        </section>
    );
}

export default BlogForm;
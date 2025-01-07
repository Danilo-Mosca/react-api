import { useState, useEffect } from "react";    // Importo gli hook useState e useEffect
import Card from "./Card";
import BlogForm from "./BlogForm";          // Importo il componente BlogForm che disegnerà i campi del form in questo componente

// Variabile usata per inizializzare lo useState post e successivamente per svuotare i campi del form
const initialPost = {
    id: "",
    title: "",
    image: "https://picsum.photos/640/480",
    content: "",
    category: "",
    tags: ["storia", "arte", "sport", "attualità"],
    published: false,
};
// Costante contenente i valori da passare alla <select> del form
const categoriesAvaible = ["news", "informatica", "musica", "cucina"];

export default function MainComponent() {
    // Variabile di stato dei post, che conterrà un oggetto dei post
    const [post, setPost] = useState(initialPost);
    // Variabile di stato della lista di post
    const [postList, setPostList] = useState([]);

    const [alterPublished, setAlterPublished] = useState(false);



    // Funzione che cancella il post agganciata al click del pulsante
    function deletedPost(id) {
        setPostList(postList.filter((value) => value.id != id));
    }

    // Funzione che gestisce gli eventi sulle Input text
    function handlerInput(event) {
        /* Metodo lungo: */
        // const newPost = { ...post };    // Mi creo una copia dell'oggetto post
        // newPost[event.target.name] = event.target.value;    //Gli assegno ogni suo corrispettivo valore
        // setPost(newPost);   // Setto la variabile oggetto di stato

        // Alla costante value assegno il valore "true" (con event.target.checked) se è checkata altrimenti lascio quello di default "false" e procedo con le assegnazioni di altri valori delle Input
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        /* -------- Sezione che calcola l'id univoco dell'oggetto assegnandogli il valore dell'id dell'ultimo oggetto + 1 -------- */
        let newId;
        if (postList.length === 0) {
            newId = 1;
        }
        else {
            const objectId = postList.reduce((previous, next) => {
                return next.id > previous.id ? next : previous;
            });
            newId = objectId.id;
            newId++;
        }
        /* --------------------------------------------- Fine sezione che calcolo id --------------------------------------------- */

        /* Metodo breve: */
        // Creo prima una copia dell'oggetto posto con il rest operator ...post
        // poi assegno alla rispettiva chiave (cercata dinamicamente in base al valore
        // contenuto in [event.target.name]) il valore assegnato al controllo precedente a value
        setPost({ ...post, id: newId, [event.target.name]: value });
        // setPost([...post, { id: newId, title: event.target.value }]);

    }

    // Funzione che gestisce l'evento al click sul pulsante di invio
    function handlerSubmit(event) {
        event.preventDefault();     //blocco il caricamento della pagina
        // /* Metodo lungo (come sopra): */
        // const newPostList = {...postList};
        // newPostList.push(post);
        // setPostList(newPostList);

        /* Metodo breve (come sopra): */
        setPostList([...postList, post]);

        // Svuoto il form dai valori inseriti dopo il click al pulsante di submit
        setPost(initialPost);
    }

    // Funzione che setta l'oggetto post con la categoria selezionata nelle select
    function handlerChangeCategory(event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const value = event.target.value;
        // console.log("event target: ",event.target.value);
        
        // Controllo se è stata selezionata una categoria specifica o solo il campo "Seleziona una categoria"
        if (!value) {
            setPost({ ...post, category: "Nessuna categoria selezionata" });
        } else {
            setPost({ ...post, category: value });
        }
    }

    /* Eseguo l'hook useEffect al caricamento iniziale della pagina e ogni volta che cambia il valore di post.published */
    useEffect(() => {
        // Visualizzo un alert ogni volta che il valore di post.published sarà selezionato, cioè sarà true
        if (post.published) {
            alert("Hai cliccato su pubblica l'articolo!");

        }
    }, [post.published]);



    // function tags() {
    //     let tagsList =[];
    //     postList.tags.forEach((tag) => {
    //         if(!tagsList.includes(tag)) {
    //             tagsList.push(tag);
    //         }
    //     })
    //     return tagsList;
    // }



    // Clono l'array della variabile di stato
    const arrayPosts = [...postList];

    //parte html da ritornare
    return (
        <>
            {// Mappo props cities per popolare le card
                arrayPosts.map((post) => {
                    // Ritorno la card solo se questa ha la chiave published impostata su true
                    if (post.published) {
                        return <Card
                            id={post.id}
                            title={post.title}
                            image={post.image}
                            content={post.content}
                            category={post.category}
                            published={post.published}
                            key={post.id}
                            onDelete={() => deletedPost(post.id)} />
                    }
                }
                )}

            <BlogForm
                handlerInput={handlerInput}
                handlerSubmit={handlerSubmit}
                handlerChangeCategory={handlerChangeCategory}
                post={post}
                categoriesAvaible={categoriesAvaible}
            />
        </>
    );
}
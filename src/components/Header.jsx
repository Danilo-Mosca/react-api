/* Funzione che restituisce il titolo dell'header */
function Header() {
    const title = "Il Mio blog";
    return (
        <>
            <header className="container">
                <h1>{title}</h1>
            </header>
        </>
    );
}
export default Header;

/**
 * Obtiene una carta de la baraja
 * @param {Array<String>} deck es un array de string
 * @returns {String} retorna la ultima carta barajada en el deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
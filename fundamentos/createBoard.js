const createBoard = => {
    for (let index = 0; index < board.game.length; index += 1) {

        const celula = document.createElement('div');
        celula.className = 'celula';
        celula.setAttribute('id', index);
        play.(celula, updateBoard);

        board.elemente.appendChild(celula);
    }
}
export default createBoard;
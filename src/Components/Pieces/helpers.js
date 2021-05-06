import pieces from '../../pieces.json';

export function GetPieceById(id) {
    return pieces.find((piece) => id === piece.id);
}
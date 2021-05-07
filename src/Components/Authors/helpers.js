import authors from '../../authors.json';

export function GetAuthorById(id) {
    return authors.find((author) => id === author.id);
}
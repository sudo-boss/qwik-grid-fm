/**
 * Genera una cadena aleatoria de la longitud indicada
 * @param {number} length Longitud de la randomString
 * @returns {string}
 */
declare function randomString(length: number): string;
/**
 * Genera una cadena aleatoria de la longitud indicada con la lista indicada de caracteres dados en una cadena
 * @param {number} length Longitud del randomString
 * @param {string} characters lista de characters
 * @returns {string}
 */
declare function randomStringCustom(length: number, characters: string): string;
/**
 * Devuelve una palabra aleatoria de una matriz dada de palabras
 * @param {string[]} words array of strings (words)
 * @returns {string}
 */
declare function randomWord(words: string[]): string;
/**
 * Genera una cadena aleatoria y única.
 * @returns {string} una cadena única
 */
declare function uniqueString(): string;
export declare const generate: {
    randomString: typeof randomString;
    uniqueString: typeof uniqueString;
    randomWord: typeof randomWord;
    randomStringCustom: typeof randomStringCustom;
};
export {};

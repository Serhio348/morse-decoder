const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
const even = '10'
const odd = '11'

function decode(expr) {
    let arrayMorze = [];
    for (let i = 10; i <= expr.length; i = i + 10) {
        expr.slice(i - 10, i) === '**********' ?
            arrayMorze.push(" ") : null
        let numberMorze = '';
        for (let j = 0; j <= 10; j = j + 2) {
            expr.slice(i - 10, i).slice(j, j + 2) === even ? numberMorze += '.' : null
            expr.slice(i - 10, i).slice(j, j + 2) === odd ? numberMorze += '-' : null

        }
        arrayMorze.push(numberMorze)
    }
    for (let i = 0; i < arrayMorze.length; i++) {
        for (let key in MORSE_TABLE) {
            key === arrayMorze[i] ? arrayMorze[i] = MORSE_TABLE[key] : null;
        }
    }

    return arrayMorze.join('')
}

module.exports = {
    decode
}
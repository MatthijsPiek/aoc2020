import {readFileSync} from 'fs'

interface NumberArray {
    length: number;

    [index: number]: number
}

export function find_pair_with_sum(terms: NumberArray, sum: number) {
    let i: number = 0;
    let pair: number[] = [0, 0]
    while (i < terms.length && pair[0] + pair[1] != sum) {
        pair[0] = terms[i];
        let j: number = 0;
        while (pair[0] + terms[j] != sum && j < i) {
            j++;
        }
        pair[1] = terms[j];
        i++;
    }

    return pair
}

export function readFileNumbers(path: string = '../data/1.ts') {
    return readFileSync(path).toString().split('\n').map(Number)
}


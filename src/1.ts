import {readFileSync} from 'fs'

export function set_2020_multiplication(expenses: NumberArray, set_size: number) {
    const set_2020 = find_set_with_sum(expenses, 2020, set_size)
    return set_2020.reduce((subresult, factor) => subresult * factor);
}

export function find_set_with_sum(terms: NumberArray, target_sum: number, set_size: number) {
    let i: number = set_size - 1;
    let set: number[] = []
    while (i < terms.length && set.reduce((sum, entry) => sum + entry, 0) != target_sum || set.length != set_size) {
        set[0] = terms[i];
        if (set_size > 1) {
            const subset = find_set_with_sum(terms.slice(0, i), target_sum - terms[i], set_size - 1)
            set = [terms[i], ...subset]
        }
        i++;
    }

    return set
}

export function readFileNumbers(path: string) {
    return readFileSync(path).toString().split('\n').map(Number)
}

interface NumberArray {
    slice(start: number, end: number): NumberArray;
    length: number;

    [index: number]: number
}


const expenses: NumberArray = readFileNumbers('data/1/input.txt');

console.log("First answer is: " + set_2020_multiplication(expenses,2))
console.log("Second answer is: " + set_2020_multiplication(expenses,3))

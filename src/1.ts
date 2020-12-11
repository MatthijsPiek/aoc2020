import {readLines} from "./files";

export function set_2020_multiplication(line_items: NumberArray, set_size: number): number {
    const set_2020 = find_set_with_sum(line_items, 2020, set_size);
    return set_2020.reduce((subresult, factor) => subresult * factor);
}

export function find_set_with_sum(terms: NumberArray, target_sum: number, set_size: number): number[] {
    let i: number = set_size - 1;
    let set: number[] = [];
    while (i < terms.length && set.reduce((sum, entry) => sum + entry, 0) != target_sum || set.length != set_size) {
        set[0] = terms[i];
        if (set_size > 1) {
            const subset = find_set_with_sum(terms.slice(0, i), target_sum - terms[i], set_size - 1);
            set = [terms[i], ...subset];
        }
        i++;
    }

    return set;
}

export function readFileNumbers(path: string): number[] {
    return readLines(path).map(Number);
}

interface NumberArray {
    slice(start: number, end: number): NumberArray;
    length: number;

    [index: number]: number
}


const expenses: NumberArray = readFileNumbers("data/1/input.txt");

console.log("First answer is: " + set_2020_multiplication(expenses,2));
console.log("Second answer is: " + set_2020_multiplication(expenses,3));

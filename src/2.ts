import {PasswordWithPolicy} from "./2/PasswordWithPolicy";
import {readLines} from "./files";

export function count_valid_passwords(entries: string[]): number {
    return entries
        .filter((line) => new PasswordWithPolicy(line).validate_repetition())
        .length;
}

export function count_valid_passwords_positional(entries: string[]): number {
    return entries
        .filter((line) => new PasswordWithPolicy(line).validate_positional())
        .length;
}


console.log("First answer is: " + count_valid_passwords(readLines("data/2/input.txt")));
console.log("Second answer is: " + count_valid_passwords_positional(readLines("data/2/input.txt")));

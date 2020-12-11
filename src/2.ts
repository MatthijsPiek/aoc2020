import {PasswordWithPolicy} from "./2/PasswordWithPolicy";
import {readLines} from "./files";

export function count_valid_passwords(entries: string[]): number {

    return entries
        .filter((line) => new PasswordWithPolicy(line).validate())
        .length;
}

console.log("Answer is: " + count_valid_passwords(readLines("data/2/input.txt")));

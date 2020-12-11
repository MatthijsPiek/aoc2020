import {PasswordWithPolicy} from "./2/PasswordWithPolicy";

export function count_valid_passwords(entries: string[]) {

    return entries
        .filter((line) => new PasswordWithPolicy(line).validate())
        .length
}

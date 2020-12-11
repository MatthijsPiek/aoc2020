export class PasswordWithPolicy {
    policy_first = 0
    policy_last = 0
    policy_char = ""
    password = ""

    constructor(entry: string) {
        const matches = entry.match(/^([0-9]+)-([0-9]+) (.): (.+)$/);
        if (matches && matches.length == 5) {
            this.policy_first = Number(matches[1]);
            this.policy_last = Number(matches[2]);
            this.policy_char = matches[3];
            this.password = matches[4];
        }
    }

    validate_repetition(): boolean {
        let i = -1;
        let count = 0;

        while (i < this.password.length) {
            i = this.password.indexOf(this.policy_char, i + 1);

            if (i != -1) {
                count++;
            } else {
                break;
            }
        }

        return count >= this.policy_first && count <= this.policy_last;
    }

    validate_positional(): boolean {
        const positional_chars = [ this.password[this.policy_first - 1], this.password[this.policy_last - 1]];
        return positional_chars.filter((char) => char == this.policy_char).length == 1;
    }
}

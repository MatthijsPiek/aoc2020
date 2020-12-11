export class PasswordWithPolicy {
    policy_min = 0
    policy_max = 0
    policy_char = ""
    password = ""

    constructor(entry: string) {
        const matches = entry.match(/^([0-9]+)-([0-9]+) (.): (.+)$/);
        if (matches && matches.length == 5) {
            this.policy_min = Number(matches[1]);
            this.policy_max = Number(matches[2]);
            this.policy_char = matches[3];
            this.password = matches[4];
        }
    }

    validate(): boolean {
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

        return count >= this.policy_min && count <= this.policy_max;
    }
}

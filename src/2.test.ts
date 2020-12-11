class PasswordWithPolicy {
    policy_min: number
    policy_max: number
    policy_char: string
    password: string

    constructor(entry: string) {
        let matches = entry.match(/^([0-9]+)-([0-9]+) (.): (.+)$/)
        this.policy_min = Number(matches[1])
        this.policy_max = Number(matches[2])
        this.policy_char = matches[3]
        this.password = matches[4]
    }

    validate() {
        let i = - 1
        let count = 0

        while (i < this.password.length) {
            i = this.password.indexOf(this.policy_char, i + 1)

            if (i != -1) {
                count++;
            } else {
                break;
            }
        }

        return count >= this.policy_min && count <= this.policy_max;
    }
}

test("validate 1-3 a: abcde", () => {
    expect(new PasswordWithPolicy("1-3 a: abcde").validate())
        .toBe(true)
})

test("split 1-3 a: abcde", () => {
    let result = new PasswordWithPolicy("1-3 a: abcde")

    expect(result.policy_min).toBe(1)
    expect(result.policy_max).toBe(3)
    expect(result.policy_char).toBe("a")
    expect(result.password).toBe("abcde")
})

test("validate 1-3 b: cdefg", () => {
    expect(new PasswordWithPolicy("1-3 b: cdefg").validate())
        .toBe(false)
})

test("validate 2-9 c: ccccccccc", () => {
    expect(new PasswordWithPolicy("2-9 c: ccccccccc").validate())
        .toBe(true)
})



import {count_valid_passwords} from "./2";
import {PasswordWithPolicy} from "./2/PasswordWithPolicy";

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

test("full example", () => {
        let number_valid: number = count_valid_passwords(
            [
                "1-3 a: abcde",
                "1-3 b: cdefg",
                "2-9 c: ccccccccc"]
        )

        expect(number_valid).toBe(2)
    }
)

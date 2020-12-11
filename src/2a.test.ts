import {count_valid_passwords} from "./2";
import {PasswordWithPolicy} from "./2/PasswordWithPolicy";

test("validate 1-3 a: abcde", () => {
    expect(new PasswordWithPolicy("1-3 a: abcde").validate_repetition())
        .toBe(true);
});

test("split 1-3 a: abcde", () => {
    const result = new PasswordWithPolicy("1-3 a: abcde");

    expect(result.policy_first).toBe(1);
    expect(result.policy_last).toBe(3);
    expect(result.policy_char).toBe("a");
    expect(result.password).toBe("abcde");
});

test("validate 1-3 b: cdefg", () => {
    expect(new PasswordWithPolicy("1-3 b: cdefg").validate_repetition())
        .toBe(false);
});

test("validate 2-9 c: ccccccccc", () => {
    expect(new PasswordWithPolicy("2-9 c: ccccccccc").validate_repetition())
        .toBe(true);
});

test("full example", () => {
    const number_valid: number = count_valid_passwords(
        [
            "1-3 a: abcde",
            "1-3 b: cdefg",
            "2-9 c: ccccccccc"]
    );

    expect(number_valid).toBe(2);
}
);

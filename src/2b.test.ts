import {count_valid_passwords_positional} from "./2";
import {PasswordWithPolicy} from "./2/PasswordWithPolicy";

test("validate 1-3 a: abcde", () => {
    expect(new PasswordWithPolicy("1-3 a: abcde").validate_positional())
        .toBe(true);
});

test("validate 1-3 b: cdefg", () => {
    expect(new PasswordWithPolicy("1-3 b: cdefg").validate_positional())
        .toBe(false);
});

test("validate 2-9 c: ccccccccc", () => {
    expect(new PasswordWithPolicy("2-9 c: ccccccccc").validate_positional())
        .toBe(false);
});

test("full example", () => {
    const number_valid: number = count_valid_passwords_positional(
        [
            "1-3 a: abcde",
            "1-3 b: cdefg",
            "2-9 c: ccccccccc"]
    );

    expect(number_valid).toBe(1);
}
);

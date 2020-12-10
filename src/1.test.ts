import {find_pair_with_sum} from "./1";

test('find example pair', () => {
    let result = find_pair_with_sum(
        [
            1721,
            979,
            366,
            299,
            675,
            1456,
        ],
        2020);

    expect(result).toContain(1721)
    expect(result).toContain(299)
    expect(result.length).toBe(2)
})

test('find example answer', () => {
    function pair_2020_multiplication(expenses: number[]) {
        const pair_2020 = find_pair_with_sum(expenses, 2020)
        return pair_2020[0] * pair_2020[1];
    }

    let result: number = pair_2020_multiplication(
        [
            1721,
            979,
            366,
            299,
            675,
            1456,
        ]);

    expect(result).toBe(514579)
})

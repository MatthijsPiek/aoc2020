import {find_set_with_sum, set_2020_multiplication, readFileNumbers} from "./1";

test('find example pair', () => {
    let result = find_set_with_sum(
        [
            1721,
            979,
            366,
            299,
            675,
            1456,
        ],
        2020, 2);

    expect(result).toContain(1721)
    expect(result).toContain(299)
    expect(result.length).toBe(2)
})


test('find example answer', () => {

    let result: number = set_2020_multiplication([
        1721,
        979,
        366,
        299,
        675,
        1456,
    ], 2);

    expect(result).toBe(514579)
})

test('find example answer', () => {

    let result: number = set_2020_multiplication([
        1721,
        979,
        366,
        299,
        675,
        1456,
    ], 3);

    expect(result).toBe(241861950)
})

test('find example triplet', () => {
    let result = find_set_with_sum(
        [
            1721,
            979,
            366,
            299,
            675,
            1456,
        ],
        2020, 3);

    expect(result.length).toBe(3)
    expect(result).toContain(979)
    expect(result).toContain(366)
    expect(result).toContain(675)
})

test('find set of 3 with sum 2020', () => {

    let result: number[] = find_set_with_sum([
        20,
        900,
        1000,
        1100
    ], 2020, 3);

    expect(result.length).toBe(3)
    expect(result).toContain(20)
    expect(result).toContain(900)
    expect(result).toContain(1100)
})


test('read number from file', () =>{
    const expenses: number[] = readFileNumbers('data/1/input.txt')
    expect(expenses).toContain(969)
    expect(expenses).toContain(1743)
})

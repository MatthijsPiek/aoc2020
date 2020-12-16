class WaitTime {
    bus_id: number
    time: number

    constructor(bus_id: number, time: number) {
        this.bus_id = bus_id;
        this.time = time;
    }
}

function time_till_next_departure(input: string): WaitTime {
    const lines: string[] = input.split("\n");
    const current_time = Number(lines[0]);
    const schedule: number[] = lines[1]
        .split(",")
        .filter((value) => value != "x")
        .map(Number);

    const wait_times = schedule.map((cycle_time) =>
        new WaitTime(
            cycle_time,
            (cycle_time - (current_time % cycle_time)) % cycle_time)
    );

    return wait_times.reduce((min, value) => {
        if (value.time < min.time) {
            return value;
        } else {
            return min;
        }
    });
}

test("time till next departure example", () => {
    const input = "939\n" +
        "7,13,x,x,59,x,31,19";
    const answer = time_till_next_departure(input);

    expect(answer.time).toBe(5);
    expect(answer.bus_id).toBe(59);
    expect(answer.time * answer.bus_id).toBe(295);
});

test("time till next departure puzzle input", () => {
    const input = "1007268\n" +
        "17,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,937,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,x,23,x,x,x,x,x,29,x,397,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19";
    const answer = time_till_next_departure(input);

    expect(answer.time).toBe(7);
    expect(answer.bus_id).toBe(937);
    expect(answer.time * answer.bus_id).toBe(6559);
});

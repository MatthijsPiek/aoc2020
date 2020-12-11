import {readFileSync} from "fs";

export function readLines(path: string): string[] {
    return readFileSync(path).toString().split("\n");
}

function addition(x, y) {
    return x + y;
}

function addition2(x: number, y: number): number {
    return x + y;
}

let addition3 = function (x: number, y: number): number {
    return x + y;
}

console.log(addition(8, 5));
console.log(addition(5, "A"));
// console.log(addition2(5, "A"));
console.log(addition2(9, 7));
console.log(addition3(14, 5));

function addition4(x: number, y: number = 4): number {
    return x + y;
}
console.log(addition4(4, 8));
console.log(addition4(3));

function addition5(x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(addition5(3, 5));
console.log(addition5(3));

function invite(first: string, ...others: string[]): string {
    return first + " " + others.join(" ");
}
console.log(invite("A", "B", "C", "D", "E", "F"));

function invite2(...names: string[]): string {
    return names.join(" ");
}
console.log(invite2("A", "B", "C", "D"));
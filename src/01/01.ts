export const value01_01 = '01_01'

export function splitIntoWords(sentense: string) {
    let a = sentense
        .toLowerCase()
        .split(" ")
        .filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
        )


    return a
}

export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}
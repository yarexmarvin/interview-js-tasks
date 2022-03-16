export type anagramType = (value1: string, value2: string) => boolean;
export type wordToObjType = (value: string) => wordObjType;

export type wordObjType = {
    [key in string]: number
}
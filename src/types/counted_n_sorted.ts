export type CountedNSorted = (arr: any[]) => any[];
export type Counted = (arr:any[]) => CountedObj
export type Sorted = (obj: CountedObj) => any[];

export type CountedObj = {
    [key in any]: number
}
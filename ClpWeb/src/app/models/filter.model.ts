export interface Filter {
    score: number,
    impureza: number,
    tempo: number
}

export type Filters = Array<Filter>;
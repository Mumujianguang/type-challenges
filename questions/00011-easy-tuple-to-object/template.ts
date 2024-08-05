type TupleToObject<T extends readonly any[]> = {
    [p in T[number]]: p
}

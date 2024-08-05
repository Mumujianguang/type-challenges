type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [p in keyof T as p extends K ? p : never]: T[p]
} & {
    [p in keyof T as p extends K ? never : p]: T[p]
}

type PickKey<S, K> = K extends S ? K : never

type MyPick<T, K extends keyof T> = {
    [P in keyof T as PickKey<K, P>] : T[P]
}

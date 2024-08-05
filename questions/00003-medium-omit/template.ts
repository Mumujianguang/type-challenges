// 若 P 不在 K 中，则返回 P，否则返回 never - 实现排除 K 中的 P
type omitKey<K, P> = P extends K ? never : P

type MyOmit<
    T,
    K extends keyof T
> = {
    [p in keyof T as omitKey<K, p>]: T[p]
}
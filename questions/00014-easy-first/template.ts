type First<T extends any[]> = T extends [infer R, ...args: any] ? R : never

type TupleToUnion<T> = T extends [...args: (infer R)[]] ? R : never

type Pop<T extends any[]> = T extends [...args: infer R, any] ? R : []

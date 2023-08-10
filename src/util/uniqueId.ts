const counters = new Map<string, number>();

const getUniqueId = (prefix: string = 'id'): string => {
    const newCounter = (counters.get(prefix) ?? 0) + 1;
    counters.set(prefix, newCounter);

    return `${prefix}-${newCounter}`;
}

export default getUniqueId;

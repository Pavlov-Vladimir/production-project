type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    const classes = [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
    return classes.join(' ');
}
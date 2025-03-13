export type Mods = Record<string, boolean | string | undefined> | [string]

export const classNames = (
    className: string,
    mode: Mods = {},
    additionalClasses: Array<string | undefined> = [],
): string => [
    className,
    ...Object.entries(mode)
        .filter(([, value]) => Boolean(value))
        .map(([cls, _]) => cls),
    ...additionalClasses.filter(Boolean),
].join(' ');

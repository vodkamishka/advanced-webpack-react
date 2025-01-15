type Mode = Record<string, boolean | string> | [string]

export const classNames = (
    className: string,
    mode: Mode = {},
    additionalClasses: string[] = [],
): string => [
    className,
    ...Object.entries(mode)
        .filter(([, value]) => Boolean(value))
        .map(([cls, _]) => cls),
    ...additionalClasses,
].join(' ');

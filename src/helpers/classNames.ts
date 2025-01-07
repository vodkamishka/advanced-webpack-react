type Mode = Record<string, boolean | string>

export const classNames = (className: string, mode?: Mode, additionalClasses?: string[]): string => {

    return [
        className,
        ...Object.entries(mode)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls, value]) => cls)
        ,
        ...additionalClasses
    ].join(' ')

}
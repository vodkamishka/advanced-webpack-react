declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';

    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}

declare let __IS_DEV__: boolean;

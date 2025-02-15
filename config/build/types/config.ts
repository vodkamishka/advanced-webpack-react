export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    env: string;
}

export interface EnvOptions {
    PORT: number;
    mode: BuildMode;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
}

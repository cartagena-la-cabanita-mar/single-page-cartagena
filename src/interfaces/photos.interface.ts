export interface PhotoCredit {
    title: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
}

export interface PhotoMeta {
    width: number;
    height: number;
    sizes: ReadonlyArray<number>;
    credit?: PhotoCredit;
}

export interface PhotoSource {
    src: string;
    srcSet: string;
    width: number;
    height: number;
}

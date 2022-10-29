export interface GridSystem {
    span?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}
export declare const ColStyles: (gridInfo: GridSystem) => {
    parentClassName: string;
    styles: string;
};
export declare function colWidthBalancer(gridInfo: GridSystem): {
    span: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

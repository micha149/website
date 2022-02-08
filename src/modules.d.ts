declare module "*.png" {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const url: string;
    export { Image };
    export default url;
}

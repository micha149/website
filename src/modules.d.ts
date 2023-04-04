declare module '*.svg' {
    const Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const url: string;
    export { Image };
    export default url;
}

declare module 'react-helmet';
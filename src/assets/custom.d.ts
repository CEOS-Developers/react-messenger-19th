declare module '*.jpg' {
  const path: string;
  export default path;
}
declare module '*.png' {
  const path: string;
  export default path;
}
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module '*.woff2';

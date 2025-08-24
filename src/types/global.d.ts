// CSS Modules の型定義
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// SVG ファイルの型定義
declare module '*.svg' {
  const content: string;
  export default content;
}

// JSON ファイルの型定義
declare module '*.json' {
  const value: any;
  export default value;
}

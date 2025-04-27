declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

// 环境变量
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: number;
  VITE_APP_BASE_API: string;
  VITE_APP_BASE_URL: string;
  VITE_APP_CONTEXT_PATH: string;
  VITE_APP_ENV: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

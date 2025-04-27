import modal from '@/plugins/modal';
import { to } from 'await-to-js';

export {};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // 全局方法声明
    $modal: typeof modal;
    $to: typeof to;
  }
}

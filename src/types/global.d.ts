import type { PropType as VuePropType, ComponentInternalInstance as ComponentInstance } from 'vue';

declare global {
  /** vue Instance */
  declare type ComponentInternalInstance = ComponentInstance;
  /**
   * 界面字段隐藏属性
   */
  declare interface FieldOption {
    key: number;
    label: string;
    visible: boolean;
    children?: Array<FieldOption>;
  }
}
export {};

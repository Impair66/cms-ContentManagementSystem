import { CommonFileUrl, getUploadToken } from '@/api/upload';
import type { UploadType } from '@/api/upload/type';
import * as qiniu from 'qiniu-js';

export const safeJsonParse = (str: string, defaultVal: any) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return defaultVal;
  }
};

// 抽离公共qiniu上传方法
export const useCommonUpload = () => {
  const uploading = ref(false);
  const progress = ref(0);
  const error = ref<any>(null);
  const fileUrl = ref<any>(null);
  const upload = async (file: File, uploadType: UploadType) => {
    try {
      if (!file) return;
      uploading.value = true;
      error.value = null;
      fileUrl.value = '';
      const res = await getUploadToken({ type: uploadType });
      const uploadInfo = res.data.data;
      const key = `${uploadInfo.key}${Date.now()}_${file.name}`;
      const config = {
        useCdnDomain: true,
        region: qiniu.region.z2,
        forceDirect: false
      };
      const observable = qiniu.upload(file, key, uploadInfo.token, {}, config);

      await new Promise((resolve, reject) => {
        const subscription = observable.subscribe({
          next: (res: any) => {
            progress.value = Math.floor(res.total.percent);
          },
          error: (err: any) => {
            error.value = err;
            reject(err);
            subscription.unsubscribe();
          },
          complete: (res: any) => {
            // 构造文件URL
            fileUrl.value = `${CommonFileUrl}${res.key}`;
            progress.value = 100;
            resolve(fileUrl);
          }
        });
      });
    } catch (e) {
      uploading.value = false;
      ElMessage.error(`上传流程出错，${error.value}`);
    } finally {
      uploading.value = false;
    }
  };

  return { uploadRun: upload, fileUrl: fileUrl, loading: uploading, progress: progress };
};

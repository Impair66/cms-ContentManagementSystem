// import { getUserInfo as getUserInfoApi, logoutApi } from '@/api/common/index';
// import { removeToken } from '@/utils/auth';
// import router from '@/router';
// import { RoutePathEnum } from '@/enums/route';

// export const useUserStore = defineStore('user', () => {
//   let baseInfo = ref<BaseInfo>({
//     token: '',
//     tokenName: '',
//     userId: ''
//   });
//   let userInfo = ref<any>({});
//   interface BaseInfo {
//     token: string;
//     tokenName: string;
//     userId: string | number;
//   }

//   const setInfo = (info: BaseInfo) => {
//     baseInfo.value = info;
//   };

//   const getUserInfo = async () => {
//     const res = await getUserInfoApi();
//     userInfo.value = res.data.data;
//   };

//   const logout = async () => {
//     await logoutApi();
//     removeToken();
//     localStorage.clear();
//     resetState();
//     router.push({ name: RoutePathEnum.LOGIN });
//   };

//   const resetState = () => {
//     Object.assign(baseInfo.value, {
//       token: '',
//       tokenName: '',
//       userId: ''
//     });
//     userInfo.value = {};
//   };

//   return {
//     baseInfo,
//     setInfo,
//     userInfo,
//     getUserInfo,
//     logout
//   };
// });

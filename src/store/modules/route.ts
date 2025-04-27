import { RoutePathEnum } from '@/enums/route';
import router from '@/router';

export const useRouteStore = defineStore('route', () => {
  // 初始化路由
  const initialRoute = Object.values(RoutePathEnum).includes(router.currentRoute.value.name as RoutePathEnum)
    ? (router.currentRoute.value.name as RoutePathEnum)
    : RoutePathEnum.FORUM;
  // 当前出去前台/后台管理
  const currentRoute = ref(initialRoute);

  // 切换菜单
  const changeRoute = (path: RoutePathEnum) => {
    currentRoute.value = path;
    router.push({ name: path });
  };

  const back = async () => {
    router.go(-1);
    await new Promise<void>((resolve) => {
      router.afterEach(() => resolve());
    });
    currentRoute.value = router.currentRoute.value.name as RoutePathEnum;
  };

  return {
    currentRoute,
    changeRoute,
    back
  };
});

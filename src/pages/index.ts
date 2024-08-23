import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const SignIn = lazyLoad(
    () => import("./auth/views/SignIn"),
    (module) => module.SignIn,
);

export const CRUD = lazyLoad(
    () => import("./crud/views/CRUD"),
    (module) => module.CRUD,
);

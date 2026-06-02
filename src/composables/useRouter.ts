import { withBase } from "../utils/basePath";

export const useRouter = () => {
  const push = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", withBase(path));
    }
  };

  const replace = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", withBase(path));
    }
  };

  const back = () => {
    if (typeof window !== "undefined") {
      window.history?.back?.();
    }
  };

  return {
    push,
    replace,
    back,
  };
};

const normalizeBase = (base: string) => (base.endsWith("/") ? base.slice(0, -1) : base);

export const BASE_PATH = normalizeBase(import.meta.env.BASE_URL);

export const publicPath = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${import.meta.env.BASE_URL}${normalized.slice(1)}`;
};

export const withBase = (path: string) => {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return BASE_PATH ? `${BASE_PATH}${normalized}` : normalized;
};

export const stripBase = (pathname: string) => {
  if (!BASE_PATH || !pathname.startsWith(BASE_PATH)) return pathname;
  const stripped = pathname.slice(BASE_PATH.length);
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
};

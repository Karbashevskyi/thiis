import regexp from './regexp';

const glb = typeof window !== 'undefined' ? window : undefined;
export const isConfig = {
  packageName: 'thiis',
  useGlobalContext: true,
  error: {
    enabled: true,
  },
  definition: {
    phone: 768,
  },
  state: {
    vendor: glb?.navigator?.vendor ?? '',
    navigator: glb?.navigator ?? undefined,
    userAgent: glb?.navigator?.userAgent ?? '',
    // @ts-ignore
    platform: glb?.navigator?.platform ?? glb?.navigator?.userAgentData?.platform ?? process?.platform ?? '',
    screen: {
      width: glb?.screen?.width ?? 0,
    },
    toString: Object.prototype.toString,
  },
  regexp,
};

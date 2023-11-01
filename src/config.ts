import regexp from './regexp';

const globalContext = globalThis || self || window || global || {};
export const isConfig = {
  packageName: 'thiis',
  useGlobalContext: true,
  globalContext,
  error: {
    enabled: true,
  },
  definition: {
    phone: 768,
  },
  state: {
    vendor: globalContext.navigator?.vendor ?? '',
    navigator: globalContext.navigator,
    userAgent: globalContext.navigator?.userAgent ?? '',
    // @ts-ignore
    platform: globalContext.navigator?.platform ?? globalContext.navigator?.userAgentData?.platform ?? process?.platform ?? '',
    screen: {
      width: globalContext.screen?.width ?? 0,
    },
    toString: Object.prototype.toString,
  },
  regexp,
};

import regexp from './regexp';

const isNode = typeof process !== 'undefined' && process?.release?.name === 'node';
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// globalThis || self || window || global ||
let globalContext: any = {};

if (typeof globalThis !== 'undefined') {
  globalContext = globalThis;
} else {
  if (isNode) {
    globalContext = global;
  } else if (isBrowser) {
    globalContext = window;
  } else {
    if (typeof self !== 'undefined') {
      globalContext = self;
    }
  }
}

let vendor = '';
if (globalContext.navigator?.vendor) {
  vendor = globalContext.navigator.vendor;
}

let userAgent = '';
if (globalContext.navigator?.userAgent) {
  userAgent = globalContext.navigator.userAgent;
}

let platform = '';
if (globalContext.navigator?.platform) {
  platform = globalContext.navigator.platform;
} else if (globalContext.navigator?.userAgentData?.platform) {
  platform = globalContext.navigator.userAgentData.platform;
} else if (process?.platform) {
  platform = process.platform;
}

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
    vendor,
    navigator: globalContext.navigator,
    userAgent,
    platform,
    screen: {
      width: globalContext.screen?.width ?? 0,
    },
    toString: Object.prototype.toString,
  },
  regexp,
};

import regexp from './regexp';
import {predefinedMethods} from './methods';

export default class Thiis {
  public isNode = false;
  public isBrowser = false;

  // globalThis || self || window || global ||
  public globalContext: any = {};

  public packageName = 'thiis';
  public useGlobalContext = true;

  public error = {
    enabled: true,
  };

  public definition = {
    phone: 768,
  };

  public state = {
    vendor: '',
    navigator: this.globalContext.navigator,
    userAgent: '',
    platform: '',
    screen: {
      width: this.globalContext.screen?.width ?? 0,
    },
    toString: Object.prototype.toString,
  };

  public regexp = regexp;
  public predefinedMethods = predefinedMethods;

  public static create() {
    const instance = new Thiis();
    instance.isNode = 'undefined' !== typeof process && 'node' === process?.release?.name;
    instance.isBrowser = 'undefined' !== typeof window && 'undefined' !== typeof window.document;

    instance.initGlobalContext().initVendor().initUserAgent().initPlatform();

    return instance;
  }

  public initGlobalContext() {
    if ('undefined' !== typeof globalThis) {
      this.globalContext = globalThis;
    } else {
      if (this.isNode) {
        this.globalContext = global;
      } else if (this.isBrowser) {
        this.globalContext = window;
      } else {
        if ('undefined' !== typeof self) {
          this.globalContext = self;
        }
      }
    }

    return this;
  }

  public initVendor() {
    if (this.globalContext.navigator?.vendor) {
      this.state.vendor = this.globalContext.navigator.vendor;
    }

    return this;
  }

  public initUserAgent() {
    if (this.globalContext.navigator?.userAgent) {
      this.state.userAgent = this.globalContext.navigator.userAgent;
    }

    return this;
  }

  public initPlatform() {
    if (this.globalContext.navigator?.platform) {
      this.state.platform = this.globalContext.navigator.platform;
    } else if (this.globalContext.navigator?.userAgentData?.platform) {
      this.state.platform = this.globalContext.navigator.userAgentData.platform;
    } else if (this.isNode && process?.platform) {
      this.state.platform = process.platform;
    }

    return this;
  }
}

export const isConfig = Thiis.create();

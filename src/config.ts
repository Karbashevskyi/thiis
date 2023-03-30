export const isConfig = {
    packageName: 'thiis',
    useGlobalContext: true,
    error: {
        enabled: true,
    },
    definition: {
        phone: 768
    },
    state: {
        userAgent: window?.navigator?.userAgent ?? '',
        // @ts-ignore
        platform: window?.navigator?.platform ?? window?.navigator?.userAgentData?.platform ?? process?.platform ?? '',
        screen: {
            width: window?.screen?.width ?? ''
        }
    },
    regex: {
        bigint: /^([-+])?(\d+)n/,
        word: /^[a-zA-Z]+$/,
        ipv6: /^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/,
        ipv4: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        macAddress: /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/,
        pascalCase: /^[A-Z][a-z0-9]*([A-Z][a-z0-9]*)*$/,
        kebabCase: /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/,
        camelCase: /^[a-z][a-zA-Z0-9]*([A-Z][a-zA-Z0-9]*)*$/,
        snakeCase: /^(?!^[0-9]+$)[a-z0-9]+(_[a-z0-9]+)*$/,
        lowerCase: /[a-z]/, // Example how to use: !isConfig.regex.lowerCase.text('HELO WORLd') => false
        upperCase: /[A-Z]/, // Example how to use: !isConfig.regex.upperCase.text('hello worlD') => false
        safari: /^((?!chrome|android).)*safari/i,
        firefox: /firefox|fxios/i,
        android: /android/i,
        windows: /windows|^win/i,
        opera: /OPR|Opera/i,
        iphone: /(iPhone)/i,
        ipad: /(iPad)/i,
        ipod: /(iPod)/i,
        ie: /(Trident\/|MSIE\s)([\d.]+)/,
        edge: /edge|edg|edga\/(\d+)/i
    },
};

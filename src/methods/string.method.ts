export default {
    // String
    string: `typeof target === 'string'`, // Main method which is used in other methods in this file
    char: `target.length === 1`,
    word: `(/^[a-zA-Z]+$/).test(target)`,
    // Space
    space:  `target.length > 0 && (/\\s/).test(target)`,
    onlySpace: `target.length > 0 && (/^\\s*$/).test(target)`,
    // Address
    macAddress: `(/^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/).test(target)`,
    ipv6: `(/^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?$/).test(target)`,
    ipv4: `(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(target)`,
    // Registries/Cases
    upperCase: `!(/[a-z]/).test(target)`,
    lowerCase: `!(/[A-Z]/).test(target)`,
    snakeCase: `(/^(?!^[0-9]+$)[a-z0-9]+(_[a-z0-9]+)*$/).test(target)`,
    pascalCase: `(/^[A-Z][a-z0-9]*([A-Z][a-z0-9]*)*$/).test(target)`,
    kebabCase: `(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/).test(target)`,
    camelCase: `(/^[a-z][a-zA-Z0-9]*([A-Z][a-zA-Z0-9]*)*$/).test(target)`,
    // Date
    iso: `(/^(\\d{4}-\\d{2}-\\d{2}(?:T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{1,3})?(?:Z|[\\+\\-]\\d{2}:\\d{2})?)?)|(\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{1,3})?(?:Z|[\\+\\-]\\d{2}:\\d{2})?)/).test(target)`, // ISO 8601 is main method which is used in isoFuture, isoPast, isoToday, isoTomorrow, isoYesterday, today, tomorrow, yesterday
    isoFuture: `Date.parse(target) > Date.now()`,
    isoPast: `Date.parse(target) < Date.now()`,
    isoToday: `Date.parse(target).toDateString() === new Date().toDateString()`,
    isoTomorrow: `Date.parse(target).toDateString() === new Date(Date.now() + 86400000).toDateString()`,
    isoYesterday: `Date.parse(target).toDateString() === new Date(Date.now() - 86400000).toDateString()`,
    today: `new Date(target).toDateString() === new Date().toDateString()`,
    tomorrow: `new Date(target).toDateString() === new Date(Date.now() + 86400000).toDateString()`,
    yesterday: `new Date(target).toDateString() === new Date(Date.now() - 86400000).toDateString()`,
}

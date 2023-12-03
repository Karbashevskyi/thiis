export const regexp = {
  bigint: /^([-+])?(\d+)n/,
  safari: /^((?!chrome|android).)*safari/i,
  firefox: /firefox|fxios/i,
  android: /android/i,
  windows: /windows|^win/i,
  opera: /OPR|Opera/i,
  ie: /(Trident\/|MSIE\s)([\d.]+)/,
  edge: /edge|edg|edga\/(\d+)/i,
  mac: /mac/i,
  chrome: /Chrome|CriOS/i,
  googleInc: /Google Inc/i,
  phone: /phone/i,
  blackberry: /blackberry|bb10/i,
  androidPhone: /Android.*Mobile/i,
};

export default regexp;

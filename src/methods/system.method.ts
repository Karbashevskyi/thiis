import {isConfig} from '../config';

export default {
    android: `return (/android/i).test(target || ${isConfig.state.userAgent})`,
    mac: `return (/mac/i).test(target || ${isConfig.state.platform})`,
    windows: `return (/windows|^win/i).test(target || ${isConfig.state.platform})`,
    ios: `return (/iPad|iPhone|iPod/).test(target || ${isConfig.state.userAgent})`,
    linux: `return (/linux/i).test(target || ${isConfig.state.platform})`,
};

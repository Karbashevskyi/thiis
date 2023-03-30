import {is, IsConfig} from '../../dist';


describe('phone singel', () => {

    it('is.android.phone: Should true for 768 & android', () => {
        IsConfig.state.screen.width = 768;
        IsConfig.state.userAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36';
        expect(is.android.phone()).toBe(true);
    });

    it('is.phone.android: Should true for 768 & android', () => {
        IsConfig.state.screen.width = 768;
        IsConfig.state.userAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36';
        expect(is.phone.android()).toBe(true);
    });

    it('is.android.phone: Should false for 768 & android', () => {
        IsConfig.state.screen.width = 769;
        IsConfig.state.userAgent = 'Mozilla/5.0 (Linux; Android 11; SM-G981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Mobile Safari/537.36';
        expect(is.android.phone()).toBe(false);
    });

    it('is.phone.android: Should false for 768 & android', () => {
        IsConfig.state.screen.width = 768;
        IsConfig.state.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';
        expect(is.phone.android()).toBe(false);
    });

});


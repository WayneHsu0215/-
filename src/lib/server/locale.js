import { COOKIES } from '$lib/constants';
import { pick } from 'accept-language-parser';

/** 支援的語言 */
export const LANGUAGES = ['zh-Hant', 'en'];

/**
 * 選擇語言
 *
 * @param {import('@sveltejs/kit').RequestEvent} event
 * @returns {(html: string) => string} - 於 app.html 中替換 %lang% 的函式
 */
export function chooseLanguage(event) {
	let language = event.cookies.get(COOKIES.LANGUAGE);
	if (!LANGUAGES.includes(language)) {
		const header = event.request.headers.get('accept-language');
		language = pick(['zh', 'en'], header, { loose: true }) || LANGUAGES[0];
		if (language === 'zh') language = 'zh-Hant';
		setLanguage(event.cookies, language);
	}
	event.locals.language = language;
	return (html) => html.replace('%lang%', language);
}

export async function loadLocaleData(name, language) {
	try {
		return (await import(`$lib/locales/${name}/${language}.json`)).default;
	} catch (err) {
		// fallback to default language
		if (language === LANGUAGES[0]) throw err;
		return await loadLocaleData(name, LANGUAGES[0]);
	}
}

/**
 * 設定語言
 *
 * @param {import('@sveltejs/kit').Cookies} cookies
 * @param {string} language - 語言
 * @returns {boolean} - 是否成功設定
 */
export function setLanguage(cookies, language) {
	if (!LANGUAGES.includes(language)) return false;
	cookies.set(COOKIES.LANGUAGE, language, {
		maxAge: 60 * 60 * 24 * 60, // 2 months
		path: '/',
	});
	return true;
}

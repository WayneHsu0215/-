import Alert from './Alert.svelte';

/**
 * @param title {string} - 要在對話框中顯示的標題
 * @param message {string} - 要在對話框中顯示的訊息
 */
export function alert(title, message) {
	const alert = new Alert({ target: document.body, props: { title, message } });
	alert.$on('close', () => alert.$destroy());
}

export { default as default } from './Modal.svelte';

import './styles.scss';

async function main(): Promise<void> {
	const app = await import('./pages/App');
	app.createApp();
}
main();

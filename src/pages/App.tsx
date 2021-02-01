import { h, render } from 'preact';

export function createApp(): void {
	const app = <App />;
	render(app, document.body);
}

export function App(): h.JSX.Element {
	return <div>Yo</div>;
}

import type { State } from 'fxw/models/state';
import type { compose } from 'redux';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		__PRELOADED_STATE__?: State;

		snapSaveState?: () => { __PRELOADED_STATE__: State };
	}
}

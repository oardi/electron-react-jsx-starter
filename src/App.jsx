import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
	const onChildClicked = (e) => {
		console.warn('callback from parent triggered', e);
	}

	return (
		<div className="container py-2">
			<h1>React Starter Template</h1>
			<p>
				Simple React Template with a custom ButtonCounter Component.
        		</p>
			<ButtonCounter title="Hello Counter" onClicked={onChildClicked} />
		</div>
	);
}

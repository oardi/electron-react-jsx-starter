import React, { Component } from 'react';
import { ButtonCounter } from './components/ButtonCounter';

export class App extends Component {
	onChildClicked(e) {
		console.warn('callback from parent triggered', e);
	}

	render() {
		return (
			<div className="container py-2">
				<h1>React Starter Template</h1>
				<p>
					Simple React Template with a custom ButtonCounter Component.
        		</p>
				<ButtonCounter title="Hello Counter" onClicked={this.onChildClicked} />
			</div>
		);
	}
}

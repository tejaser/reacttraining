var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

// state
// lifecycel event
// UI


class App extends React.Component {
	render() {
		return (
			<div>
				Hello, React Training!!
			</div>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);

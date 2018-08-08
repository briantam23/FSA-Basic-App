import ReactDOM from 'react-dom';
import React from 'react';

class FirstElement extends React.Component {
	render () {
		return (
			<div
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: 'red',
				}}
			>
				Hi there cowboy
			</div>
		);
	}
}

ReactDOM.render(<FirstElement />, document.getElementById('root'));

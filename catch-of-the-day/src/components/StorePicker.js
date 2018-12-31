import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	//Must do if not doing the = event => fun
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	myInput = React.createRef();

	goToStore = event => {
		//1. Stop from submitting
		event.preventDefault();
		console.log(this.myInput);
		//2. get the text from that submit
		const storeName = this.myInput.current.value;
		//3. Change the page to /store they entered
		this.props.history.push(`/store/${storeName}`);

	}
	render() {
		return(
		<form className="store-selector" onSubmit={this.goToStore}>
			{ /* comment */ }
			<h2>Please Enter A Store</h2>
			<input 
				type="text"
				required
				ref={this.myInput}
				placeholder="Store Name"
				defaultValue={getFunName()} 
			/>
			<button type="submit">Visit Story</button>
		</form>
		)
	}
}

export default StorePicker;
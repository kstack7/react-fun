import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = fish => {
		//in order to update state, you have to use existing setState API
		// 1. Take a copy of the existing state (don't modify directly)
		// basically, mutations are bad

		const fishes = {...this.state.fishes};

		//2. Add our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		//3. Set the new fishes object state 
		this.setState({
			fishes: fishes
		});

		//or this.setState({ fishes }) since they're the same

	};

	addToOrder = (key) => {
		const order = {...this.state.order};

		//either add an instance or make it a first instance
		order[key] = order[key] + 1 || 1;

		this.setState({order});
	};

	loadSampleFishes = () => {
		this.setState({fishes: sampleFishes})
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Kris is cool" age={500} tag={"wee"} />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish 
								details={this.state.fishes[key]} 
								addToOrder={this.addToOrder} 
								key={key}
								index={key} />
							))
						}
					</ul>
				</div>
				<Order 
					fishes={this.state.fishes}
					order={this.state.order}
				 />
				<Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
			</div>
		)
	}
}

export default App;
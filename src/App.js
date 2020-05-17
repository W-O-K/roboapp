import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robot'
import Scroll from './Scroll';
import './App.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots' 
		onChange={searchChange}
		/>
		</div>
		)
}

 class App extends React.Component {
 	constructor(){
 		super()
 		this.state = {
 			robots: robots,
			searchfield: ''
 		}
 	}

 	// componentDidMount(){
 	// 	 fetch('https://jsonplaceholder.typicode.com/users')
 	// 	 .then(response=> response.json())
 	// 	 .then(users=>this.setState({robots: users}));	
 	// }

 	componentDidMount(){
 		return users=>this.setState({robots: robots});
 	}

 	onSearchChange = (event) => {
 		this.setState({ searchfield: event.target.value })
 	}

 	render() {
 			const { robots, searchfield } = this.state;
			const filteredRobots = robots.filter(robot  =>{
 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
 		})
		return robots.length === 0 ?
		 <h1>Loading</h1> :
		 (
			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<Cardlist robots={filteredRobots}/>	
			</Scroll>
			</div>
			
		);
		
 	}
	
}

export default App;
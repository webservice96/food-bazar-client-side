import React from "react";
import { Header, Sidebar, ContentContainer, Docs, SingleMeal, FoodSearch } from './components';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
function App() {
	return (
		<Router>
			<Header></Header>
			<div className="xl:container xl:mx-auto px-4">
				<Switch>
					<Route exact path="/"><ContentContainer /></Route>
					<Route path="/home"><h2>Hello Route</h2></Route>
					<Route path="/docs"><Docs /></Route>
					<Route path="/meals/:mealName"><ContentContainer /></Route>
					<Route path="/mealingredient/:ingredient"><ContentContainer /></Route>
					<Route path="/country/:mealcountry"><ContentContainer /></Route>
					<Route path="/mealfierst/:meallater"><ContentContainer /></Route>
					<Route path="/meal/:mealtitle"><SingleMeal /></Route>
					<Route path="/food-search"><FoodSearch /></Route>
				</Switch>
			</div>
		</Router>

	);
}

export default App;

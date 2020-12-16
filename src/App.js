import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route exact path='/'>
					<HomeScreen />
				</Route>

				<Route exact path='/blog/:slug'>
					<BlogScreen />
				</Route>

				<Route exact path='/blog/id/:id'>
					<BlogScreen />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

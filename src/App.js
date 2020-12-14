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

				<Route path='/blog/:id'>
					<BlogScreen />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

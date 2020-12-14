import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<HomeScreen />
		</div>
	);
}

export default App;

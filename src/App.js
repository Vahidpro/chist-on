import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header/Header";
import RiddlesList from "./Components/Riddles/RiddlesList";

function App() {
	return (
		<Container className="App">
			<Header />
			<RiddlesList></RiddlesList>
		</Container>
	);
}

export default App;

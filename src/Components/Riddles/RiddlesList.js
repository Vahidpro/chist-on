import Riddle from "./Riddle";

const RiddlesList = (props) => {
	return (
		<div>
			{props.riddles.map((item) => (
				<Riddle
					key={item.id}
					question={item.question}
					answer={item.answer}
				></Riddle>
			))}
		</div>
	);
};

export default RiddlesList;

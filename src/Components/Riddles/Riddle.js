import classes from "./Riddle.module.css";

const Riddle = (props) => {
	return (
		<div className={classes.container}>
			<p className={classes.question}>{props.question}</p>
			<p className={classes.answer}>{props.answer}</p>
			{console.log(props.question)}
		</div>
	);
};

export default Riddle;

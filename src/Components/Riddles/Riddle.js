import classes from "./Riddle.module.css";

const Riddle = (props) => {
	return (
		<div className={classes.container}>
			<p className={classes.question}>آن چیست که چیستان است؟</p>
			<p className={classes.answer}>جواب: چیستان! 😂😂😂</p>
		</div>
	);
};

export default Riddle;

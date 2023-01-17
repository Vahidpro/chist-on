import AnimateHeight from "react-animate-height";
import classes from "./Riddle.module.css";
import { useState } from "react";

const Riddle = (props) => {
	const [height, setHeight] = useState(0);
	return (
		<div className={classes.container}>
			<p className={classes.question}>{props.question}</p>

			<button
				aria-expanded={height !== 0}
				aria-controls="example-panel"
				onClick={() => setHeight(height === 0 ? "auto" : 0)}
				className={classes.btn_answer}
			>
				{height === 0 ? "جواب" : "بستن"}
			</button>
			<AnimateHeight id="example-panel" duration={500} height={height}>
				<p className={classes.answer}>{props.answer}</p>
			</AnimateHeight>
		</div>
	);
};

export default Riddle;

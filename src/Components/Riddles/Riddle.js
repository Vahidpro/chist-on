import AnimateHeight from "react-animate-height";
import classes from "./Riddle.module.css";
import { useState } from "react";
import notification from "../../assets/notification.mp3";

const Riddle = (props) => {
	const [height, setHeight] = useState(0);
	let [isActive, setIsActive] = useState(false);

	let audio = new Audio(notification);

	const clickHandler = () => {
		setHeight(height === 0 ? "auto" : 0);
		audio.play();
		setIsActive(true);
	};

	return (
		<div className={isActive ? classes.background_active : classes.container}>
			<p className={classes.question}>{props.question}</p>

			<button
				aria-expanded={height !== 0}
				aria-controls="example-panel"
				onClick={clickHandler}
				className={classes.btn_answer}
			>
				{height === 0 ? "جواب" : "بستن"}
			</button>
			<AnimateHeight id="example-panel" duration={500} height={height}>
				<p className={classes.answer}>{props.answer}</p>
				{/* <button onClick={audio.play()}></button> */}
			</AnimateHeight>
		</div>
	);
};

export default Riddle;

import React, { useState, useEffect } from "react";
import "./stopwatch.css";
import Timer from "../timer/timer";
import ControlButtons from "../controlbuttons/controlbuttons";

function StopWatch() {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);
const [num, setNum] = useState(0);

useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const getNum= (e)=>{
	 setNum(e.target.value);	
}

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
};

const handleReset = () => {
	setIsActive(false);
	setTime(0);
};

useEffect(()=>{
	if(num*1000 === time){
		setIsActive(false);
		setTime(0);
	};
},[time])
	
return (
	<div className="stop-watch">
	<Timer time={time} />
	<div>
		<label className="Label" >Specific time: </label>
		<input onChange={getNum} className="Input" />
	</div>
	<ControlButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/>
	</div>
);
}

export default StopWatch;

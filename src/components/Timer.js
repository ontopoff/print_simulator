import React, {useEffect} from "react";
import chronometer_icon from "../img/chronometer.svg";

const Timer = (props) => {

    const {
        time,
        started,
        resTime,
        setResTime,
        currLetterIndex,
        setSpeed,
        handleStop,
        errors,
        workoutType,
        testTime,
        setTimeLimitStatus
    } = props;

    const MAX_TIME = 420000;

    function handleTimerActivity() {
        let diffTime = Date.now() - time;
        let currTime = handleResTime(diffTime);
        setResTime(currTime);
        let currSpeed = handleSpeed(diffTime, currLetterIndex + 1);
        setSpeed(currSpeed);
        if ((workoutType && (diffTime >= testTime * 60000)) || (diffTime >= MAX_TIME)) {
            setTimeLimitStatus(false);
            handleStop(currLetterIndex + 2, errors)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (started) {
                handleTimerActivity();
            }
        }, 10);
        return () => {
            clearInterval(timer);
        }
    });

    useEffect(() => {
        if (started) {
            handleTimerActivity();
        }
    }, [currLetterIndex]);

    function handleSpeed(time, currLetterIndex) {
        let sec = (time / 1000) / 60;
        return Math.floor(currLetterIndex / sec);
    }

    function handleResTime(time) {
        let minutes = Math.floor(((time / 1000) / 60));
        let sec = Math.floor(time / 1000) % 60;
        return `0${minutes}:${sec < 10 ? "0" + sec : sec}`;
    }

    return (
        <>
            <img src={chronometer_icon} className="chronometer_icon"/> <span> {resTime}</span>
        </>
    );
}

export default Timer;
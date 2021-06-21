import React, {useEffect} from "react";
import chronometer_icon from "../img/chronometer.svg";

const Timer = ({time, started, resTime, setResTime, currLetterIndex, setSpeed}) => {

    useEffect(() => {
        const timer = setInterval(() => {
            if (started) {
                let currTime = handleResTime(Date.now() - time);
                setResTime(currTime);
                let currSpeed = handleSpeed(Date.now() - time, currLetterIndex + 1);
                setSpeed(currSpeed);
            }
        }, 10);
        return () => {
            clearInterval(timer);
        }
    });

    useEffect(() => {
        if (started) {
            let diffTime = Date.now() - time;
            let currTime = handleResTime(diffTime);
            setResTime(currTime);
            let currSpeed = handleSpeed(diffTime, currLetterIndex + 1);
            setSpeed(currSpeed);

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
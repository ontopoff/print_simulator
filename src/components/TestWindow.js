import React, {useEffect, useState} from "react";
import useEventListener from "@use-it/event-listener";
import Letter from "./Letter";
import error_icon from "../img/error_icon.svg";
import velocity_icon from "../img/velocity.svg";

import Timer from "./Timer";
import Results from "./Results";

const TestWindow = (props) => {

    const {text, loaded, handleClickTestBtn, setReload, FlipInX, testTime, workoutType} = props;

    const [queue, setQueue] = useState([]);

    const [errors, setErrors] = useState(0);
    const [showErr, setShowErr] = useState(false);

    const [currLetterIndex, setCurrLetterIndex] = useState(-1);
    const [filled, setFilled] = useState(false);

    const [speed, setSpeed] = useState(0);

    const [time, setTime] = useState(0);
    const [resTime, setResTime] = useState("00:00");
    const [started, setStarted] = useState(false);
    const [timeLimitStatus, setTimeLimitStatus] = useState(true);

    const [showRes, setShowRes] = useState(false);
    const [accuracy, setAccuracy] = useState(0);
    const [wpm, setWPM] = useState(0);


    useEffect(() => {
        if (loaded && !filled) {
            setQueue([...text[0]]);
            setFilled(true);
        }
    });

    useEventListener('keydown', ({key}) => {
        if (currLetterIndex + 1 !== queue.length && timeLimitStatus) {
            if (!(key === "CapsLock" || key === "Shift" || key === "Enter" || key === "Backspace" || key === "Alt")) {
                if (key === queue[currLetterIndex + 1]) {
                    if (currLetterIndex === -1) {
                        setTime(Date.now());
                        setStarted(true);
                    } else if (currLetterIndex + 2 === queue.length) {
                        handleStop(currLetterIndex + 2, errors)
                    }
                    setShowErr(false);
                    setCurrLetterIndex(currLetterIndex + 1);
                } else {
                    if (currLetterIndex !== -1) {
                        setShowErr(true);
                        setErrors(errors + 1);
                    }
                }
            }
        }
    });

    function handleStop(currLetterIndex, errors) {
        setStarted(false);
        countAccuracy(currLetterIndex, errors);
        countWPM(currLetterIndex);
        setShowRes(true);
    }

    function handleReload(e) {
        setReload(true);
        handleClickTestBtn(e);
    }

    function countAccuracy(typedSymbols, errors) {
        let res = (Math.floor((1 - (errors) / (typedSymbols + errors)) * 10000)) / 100;
        setAccuracy(res);
    }

    function countWPM(currLetterIndex) {
        let sec = ((Date.now() - time) / 1000) / 60;
        let finalWPM = Math.floor((currLetterIndex / 5) / sec);
        setWPM(finalWPM);
    }

    return (
        <div className="outer_testing">
            <div className="inner_testing">

                <div className="row menu_res justify-content-center">
                    <div className="col-auto col-md">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-auto align-self-center mt-1 mt-sm-0">
                                <Timer time={time}
                                       started={started}
                                       resTime={resTime}
                                       setResTime={setResTime}
                                       currLetterIndex={currLetterIndex}
                                       setSpeed={setSpeed}
                                       handleStop={handleStop}
                                       errors={errors}
                                       workoutType={workoutType}
                                       testTime={testTime}
                                       setTimeLimitStatus={setTimeLimitStatus}
                                />
                            </div>
                            <div className="col-auto align-self-center mt-2 mt-sm-0">
                                <img src={velocity_icon} className="velocity_icon"/> {speed} зн/мин
                            </div>
                            <div className="col-auto mt-2 mt-sm-0 err_col">
                                {errors > 0 ? (<>
                                    <img src={error_icon} className="err_icon"/> <span
                                    className="err_span">{errors}</span>
                                </>) : <>
                                    <img src={error_icon} className="err_icon"/> <span>{errors}</span>
                                </>}
                            </div>
                        </div>
                    </div>

                    <div className="col-auto align-self-center btn_reload order-first order-md-last mt-2 mt-md-0">
                        <button className="corner-button" onClick={handleReload}>
                            <span>Заново</span>
                        </button>
                    </div>
                </div>


                {showRes ? (
                    <FlipInX>
                        <Results accuracy={accuracy}
                                 wpm={wpm}
                        />
                    </FlipInX>
                ) : (
                    <div className="row">
                        <div className="col">
                            <div className="input_test">
                                {queue.map((letter, i) =>
                                    <Letter key={i}
                                            typed={i === currLetterIndex}
                                            curr={i - 1 === currLetterIndex}
                                            letter={letter}
                                            showErr={showErr}
                                            setShowErr={setShowErr}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}

export default TestWindow;
import React, {useEffect, useState} from "react";
import useEventListener from "@use-it/event-listener";
import Letter from "./Letter";
import error_icon from "../img/error_icon.svg";
import velocity_icon from "../img/velocity.svg";
import accuracy_icon from "../img/accuracy.svg";
import gold_medal from "../img/gold.svg";
import silver_medal from "../img/silver.svg";
import copper_medal from "../img/copper.svg";

import Timer from "./Timer";

const TestWindow = ({text, loaded, handleClickTestBtn, setReload, FlipInX}) => {

    const [queue, setQueue] = useState([]);

    const [errors, setErrors] = useState(0);
    const [showErr, setShowErr] = useState(false);

    const [currLetterIndex, setCurrLetterIndex] = useState(-1);
    const [filled, setFilled] = useState(false);

    const [speed, setSpeed] = useState(0);

    const [time, setTime] = useState(0);
    const [resTime, setResTime] = useState("00:00");
    const [started, setStarted] = useState(false);

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
        if (currLetterIndex + 1 !== queue.length) {
            if (!(key === "CapsLock" || key === "Shift" || key === "Enter" || key === "Backspace" || key === "Alt")) {
                if (key === queue[currLetterIndex + 1]) {
                    if (currLetterIndex === -1) {
                        setTime(Date.now());
                        setStarted(true);
                    } else if (currLetterIndex + 2 === queue.length) {
                        setStarted(false);

                        countAccuracy(currLetterIndex + 2, errors);
                        countWPM();
                        setShowRes(true);
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

    function handleReload(e) {
        setReload(true);
        handleClickTestBtn(e);
    }

    function countAccuracy(typedSymbols, errors) {
        let res = (Math.floor((1 - (errors) / (typedSymbols + errors)) * 10000)) / 100;
        setAccuracy(res);
    }

    function countWPM() {
        let sec = ((Date.now() - time) / 1000) / 60;
        let wpm = Math.floor((queue.length / 5) / sec);
        console.log(wpm)
        setWPM(wpm);
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
                        <div className="row justify-content-center">
                            <div className="col-auto accuracy_info">
                                <p>Точность / Скорость</p>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-sm-4 align-self-center">
                                        <span>{accuracy}%</span>
                                    </div>
                                    <div className="col-12 col-sm-4 align-self-center mt-2 mt-sm-0">
                                            <img src={accuracy_icon} className="accuracy_icon"/>
                                    </div>
                                    <div className="col-12 col-sm-4 align-self-center mt-3 mt-sm-0">
                                        {wpm >= 40 ?
                                            <>
                                                <img src={gold_medal} className="medal_icon"/>
                                            </>
                                            : wpm >= 35 ?
                                                <>
                                                    <img src={silver_medal} className="medal_icon"/>
                                                </>
                                                : wpm >= 23 ?
                                                    <>
                                                        <img src={copper_medal} className="medal_icon"/>
                                                    </>
                                                    : <span className="bad_medal">Неплохо, но можно и лучше</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
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
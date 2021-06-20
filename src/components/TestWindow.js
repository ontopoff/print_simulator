import React, {useEffect, useState} from "react";
import useEventListener from "@use-it/event-listener";
import Letter from "./Letter";
import error_icon from "../img/error_icon.svg";
import velocity_icon from "../img/velocity.svg";
import Timer from "./Timer";

const TestWindow = ({text, loaded}) => {

    const [queue, setQueue] = useState([]);

    const [errors, setErrors] = useState(0);
    const [showErr, setShowErr] = useState(false);

    const [currLetterIndex, setCurrLetterIndex] = useState(-1);
    const [filled, setFilled] = useState(false);

    const [speed, setSpeed] = useState(0);

    const [time, setTime] = useState(0);
    const [resTime, setResTime] = useState("00:00");
    const [started, setStarted] = useState(false);

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

    return (
        <div className="outer_testing">
            <div className="inner_testing">

                <div className="row menu_res">
                    {/*<p className="menu_tag">*/}
                    {/*    <span>Меню</span>*/}
                    {/*</p>*/}
                    <div className="col-auto align-self-center">
                        <Timer time={time}
                               started={started}
                               resTime={resTime}
                               setResTime={setResTime}
                               currLetterIndex={currLetterIndex}
                               setSpeed={setSpeed}
                        />
                    </div>
                    <div className="col-auto align-self-center">
                        <img src={velocity_icon} className="velocity_icon"/> {speed} зн/мин
                    </div>
                    <div className="col-auto">
                        {errors > 0 ? (<>
                            <img src={error_icon} className="err_icon"/> <span className="err_span">{errors}</span>
                        </>) : <>
                            <img src={error_icon} className="err_icon"/> <span>{errors}</span>
                        </>}
                    </div>
                </div>

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
            </div>
        </div>
    );
}

export default TestWindow;
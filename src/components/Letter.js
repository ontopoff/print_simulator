import React, {useEffect, useState} from "react";
import useEventListener from "@use-it/event-listener";

const Letter = ({typed, curr, letter, showErr, setShowErr}) => {

    const [spanClass, setSpanClass] = useState("letter");



    useEffect(() => {
        if (curr) {
            setSpanClass("letter curr_letter")
            if (showErr) {
                setSpanClass("letter curr_letter error_letter");
            }
        }
        if (typed) {
            setSpanClass("letter hidden_letter")
        }
    })

    useEventListener("webkitAnimationEnd", () => {
        setShowErr(false);
    });

    return (
        <>
            <span className={spanClass}>{letter}</span>
        </>
    );
}

export default Letter;
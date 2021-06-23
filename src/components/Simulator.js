import React, {useState} from "react";
import '../btn_style.scss';
import {useStates} from "../context";
import TestWindow from "./TestWindow";
import {fadeInLeft, flipInX} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Loader from "./Loader";
import Intro from "./Intro";

const Simulator = () => {

    const {
        url,
        loading,
        setLoading,
        text,
        setText,
        checkedTypeText,
        ownText,
        defaultText,
        testTime,
        workoutType
    } = useStates();

    const [open, setOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [reload, setReload] = useState(false);

    const FadeInLeft = styled.div`animation: 1s ${keyframes`${fadeInLeft}`}`;
    const FlipInX = styled.div`animation: 4s ${keyframes`${flipInX}`}`;

    function initializeStartWorkout(data) {
        setText(data);
        setLoaded(true);
        setLoading(false);
        setOpen(true);
        setReload(false);
    }

    function provideFetchReq(url) {
        if (checkedTypeText) {
            initializeStartWorkout([ownText]);
        } else {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    initializeStartWorkout(data);
                })
                .catch((error) => {
                    initializeStartWorkout(defaultText);
                })
        }
    }

    function handleClickTestBtn(e) {
        e.preventDefault();
        setLoading(true);
        provideFetchReq(url);
    }

    return (
        <div className="outer_simulator">
            <div className="simulator height">
                {loading ? (
                    <Loader />
                ) : <></>}
                <div className="container">
                    <div className="row height justify-content-start align-items-center">
                        {!open ? (
                            <Intro handleClickTestBtn={handleClickTestBtn}/>
                        ) : !reload ? (
                            <>
                                <FadeInLeft>
                                    <div className="col-md-12 col-xl-10 offset-xl-1">
                                        <TestWindow text={text}
                                                    loaded={loaded}
                                                    handleClickTestBtn={handleClickTestBtn}
                                                    setReload={setReload}
                                                    FlipInX={FlipInX}
                                                    testTime={testTime}
                                                    workoutType={workoutType}
                                        />
                                    </div>
                                </FadeInLeft>
                            </>
                        ) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Simulator;
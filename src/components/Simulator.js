import React, {useState} from "react";
import '../btn_style.scss';
import {useStates} from "../context";
import TestWindow from "./TestWindow";
import {fadeInLeft, flipInX} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Simulator = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [reload, setReload] = useState(false);
    // const [defaultLang, setDefaultLang] = useState("en-ru");


    const {url, loading, setLoading} = useStates();

    const FadeInLeft = styled.div`animation: 1s ${keyframes`${fadeInLeft}`}`;
    const FlipInX = styled.div`animation: 4s ${keyframes`${flipInX}`}`;

    function provideFetchReq(url) {

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // if (defaultLang === "en-ru") {
                //     provideTranslate(data[0]);
                // } else {
                setText(data);
                setLoaded(true);
                setLoading(false);
                setOpen(true);
                setReload(false);
                // }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // function provideTranslate(data) {
    //     fetch("https://fasttranslator.herokuapp.com/api/v1/text/to/text/?source=" + data + "&lang=" + defaultLang + "&as=json", {
    //         method: "POST",
    //         mode : 'no-cors',
    //     })
    //         .then((response) => {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    function handleClickTestBtn(e) {
        e.preventDefault();
        setLoading(true);
        provideFetchReq(url);
    }

    return (
        <div className="outer_simulator">
            <div className="simulator height">
                {loading ? (
                    <div className="loading_outer">
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : <></>}
                <div className="container">
                    <div className="row height justify-content-start align-items-center">
                        {!open ? (
                            <div className="col-md-12 col-xl-8">
                                <div className="start_simulation">
                                    <p>Тренировка cлепой печати</p>
                                    <button className="btn_test" onClick={handleClickTestBtn}>
                                        <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Начать тест</span>
                                    </button>
                                </div>
                            </div>
                        ) : !reload ? (
                            <>
                                <FadeInLeft>
                                    <div className="col-md-12 col-xl-10 offset-xl-1">
                                        <TestWindow text={text} loaded={loaded} handleClickTestBtn={handleClickTestBtn}
                                                    setReload={setReload} FlipInX={FlipInX}/>
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
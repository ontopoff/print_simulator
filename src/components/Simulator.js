import React, {useState} from "react";
import '../btn_style.scss';
import {useUrl} from "../url-context";

const Simulator = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    // const [defaultLang, setDefaultLang] = useState("en-ru");
    const {url} = useUrl();

    function provideFetchReq(url) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // if (defaultLang === "en-ru") {
                //     provideTranslate(data);
                // } else {
                setText(data);
                // }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // function provideTranslate(data) {
    //     fetch("https://fasttranslator.herokuapp.com/api/v1/text/to/text?source=" + data + "&lang=" + defaultLang + "&as=json", {
    //     })
    //         .then((response) => {
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
        setOpen(true);
        provideFetchReq(url);
    }

    return (
        <div className="outer_simulator">
            <div className="simulator height">
                <div className="container">
                    <div className="row height justify-content-start align-items-center">
                        <div className="col-md-12 col-xl-8">
                            {!open ? (
                                <div className="start_simulation">
                                    <p>Тренировка cлепой печати</p>
                                    <button className="btn_test" onClick={handleClickTestBtn}>
                                        <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Начать тест</span>
                                    </button>
                                </div>
                            ) : (<>
                                <p>{text}</p>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Simulator;
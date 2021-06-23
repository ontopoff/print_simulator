import React from "react";

const Intro = ({handleClickTestBtn}) => {

    return (
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
    );
}

export default Intro;
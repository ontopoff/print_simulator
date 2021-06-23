import React from "react";
import accuracy_icon from "../img/accuracy.svg";
import gold_medal from "../img/gold.svg";
import silver_medal from "../img/silver.svg";
import copper_medal from "../img/copper.svg";

const Results = (props) => {

    const {accuracy, wpm} = props;

    return (
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
    );
}

export default Results;
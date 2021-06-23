import React, {useState} from "react";
import {useStates} from "../context";
import Customization from "./Customization";

const Menu = () => {

    const {
        loading,
        checkedTypeText,
        sentenceNum,
        testTime,
        workoutType,
        ownText,
        handleOwnText,
        toggleCheckbox,
        toggleCheckboxWorkout,
        handleSelectNumberSentence,
        handleSelectTime
    } = useStates();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="menu height">
                {loading ? (<div className="loading_outer"></div>) : <></>}
                <button className="cta" onClick={toggle}>Меню</button>
            </div>
            <Customization toggle={toggle}
                           modal={modal}
                           checkedTypeText={checkedTypeText}
                           workoutType={workoutType}
                           ownText={ownText}
                           testTime={testTime}
                           sentenceNum={sentenceNum}
                           handleOwnText={handleOwnText}
                           toggleCheckbox={toggleCheckbox}
                           toggleCheckboxWorkout={toggleCheckboxWorkout}
                           handleSelectNumberSentence={handleSelectNumberSentence}
                           handleSelectTime={handleSelectTime}
            />
        </>
    );
}

export default Menu;
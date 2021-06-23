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
        modalMenu,
        setModalMenu,
        handleOwnText,
        toggleCheckbox,
        toggleCheckboxWorkout,
        handleSelectNumberSentence,
        handleSelectTime,
        setReload,
        open
    } = useStates();



    const toggle = () => {
        setModalMenu(!modalMenu);
        if(open) {
            setReload(true);
        }
    }

    return (
        <>
            <div className="menu height">
                {loading ? (<div className="loading_outer"></div>) : <></>}
                <button className="cta" onClick={toggle}>Меню</button>
            </div>
            <Customization toggle={toggle}
                           modalMenu={modalMenu}
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
                           setModalMenu={setModalMenu}
            />
        </>
    );
}

export default Menu;
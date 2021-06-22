import React, {useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import "../checkbox_styles.css";


const Customization = (props) => {

    const {
        toggle,
        modal,
        checkedTypeText,
        workoutType,
        ownText,
        testTime,
        sentenceNum,
        handleOwnText,
        toggleCheckbox,
        toggleCheckboxWorkout,
        handleSelectNumberSentence,
        handleSelectTime
    } = props;

    const [backdrop, setBackdrop] = useState("static");
    const [keyboard, setKeyboard] = useState(true);

    return (
        <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} keyboard={keyboard}>
            <ModalHeader toggle={toggle}>
                <p className="modal_header">Настройки</p>
            </ModalHeader>
            <ModalBody>
                <div className="row justify-content-center modal_body">
                    <div className="col-auto">
                        <div className="modal_group">
                            <p className="menu_label">Использовать для тренировки</p>
                            <div className="btn-group">
                                <input type="checkbox" id="checkbox_text" onChange={toggleCheckbox} checked={checkedTypeText}/>
                                <label className="label_checkbox_text" htmlFor="checkbox_text"></label>
                            </div>
                        </div>
                        {checkedTypeText ?
                            <div className="modal_group mt-3">
                                <p className="menu_label">Введите ваш текст</p>
                                <div className="input-group">
                                    <textarea className="form-control textarea"
                                              placeholder="Введите что-нибудь!" onChange={handleOwnText} value={ownText}></textarea>
                                </div>
                            </div>
                            :
                            <div className="modal_group mt-3">
                                <div className="form-group">
                                    <p className="menu_label">Количество предложений</p>
                                    <select className="form-control" onChange={handleSelectNumberSentence}
                                            defaultValue={sentenceNum}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </div>
                        }
                        <div className="modal_group mt-3">
                            <p className="menu_label">Тип тренировки</p>
                            <div className="btn-group">
                                <input type="checkbox" id="checkbox_workout" onChange={toggleCheckboxWorkout} checked={workoutType}/>
                                <label className="label_checkbox_workout" htmlFor="checkbox_workout"></label>
                            </div>
                        </div>
                        {workoutType ?
                            <div className="modal_group mt-3">
                                <div className="form-group">
                                    <p className="menu_label">Количество минут</p>
                                    <select className="form-control" onChange={handleSelectTime}
                                            defaultValue={testTime}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Сохранить</Button>
            </ModalFooter>
        </Modal>

    );
}

export default Customization;
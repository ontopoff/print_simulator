import React, {useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const Instructions = () => {

    const [modalInstructions, setModalInstructions] = useState(true);

    const toggleInstructions = () => setModalInstructions(!modalInstructions);

    return (
        <Modal isOpen={modalInstructions} toggle={toggleInstructions}>
            <ModalHeader toggle={toggleInstructions}>
                <p className="modal_header">Инструкция</p>
            </ModalHeader>
            <ModalBody>
                <div className="modalInstructions_body">
                    <div className="mt-1">
                        <p className="menu_label modalInstructions_bold">Старт</p>
                        <p>
                            Чтобы начать тестирование воспользуйтесь кнопкой <span className="modalInstructions_bold">НАЧАТЬ ТЕСТ</span>
                            <br/>После загрузки вам откроется тренировочное пространство, где будут отображены
                            предлагаемый
                            текст и ваши результаты.
                        </p>
                        <p>
                            Чтобы запустить отсчет времени, и соответственно, сам тест, необходимо ввести первый
                            предлагаемый символ.
                            <br/>В зависимости от того, какой режим тренировки вы выбрали, процесс
                            остановится в следующих случаях:
                            <ul>
                                <li>
                                    Предложенный текст был набран полностью;
                                </li>
                                <li>
                                    Закончилось установленное время;
                                </li>
                                <li>
                                    Был превышен максимальный лимит времени тестирования.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="mt-3">
                        <p className="menu_label modalInstructions_bold">Настройки</p>
                        <p>
                            Чтобы задать особые условия тренировки воспользуйтесь кнопкой <span
                            className="modalInstructions_bold">Меню</span>
                        </p>
                        <p>
                            Здесь вы можете указать источник текста, его размер, а также формат самого тестирования. У
                            вас
                            есть возможность проверить свои навыки слепой печати в режиме на скорость с ограниченным
                            временем, а также проявить мастерство при наборе текста на время.
                        </p>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggleInstructions}>Закрыть</Button>
            </ModalFooter>
        </Modal>
    );
}

export default Instructions;
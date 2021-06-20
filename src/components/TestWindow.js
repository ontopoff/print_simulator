import React, {useEffect, useState} from "react";

const TestWindow = ({text, loaded}) => {

    const [queue, setQueue] = useState([])
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (loaded && !filled) {
            setQueue([...text[0]]);
            setFilled(true);
        }
    });

    return (
        <div className="outer_testing">
            <div className="inner_testing">
                <div className="row">
                    <div className="col-lg-10">
                        <input type="text" readOnly className="form-control-plaintext input_letter"/>
                        <div className="input_test">
                            {queue.map((letter, i) =>
                                <span className="letter" key={i}>{letter}</span>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-2 menu_res">
                        Меню
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestWindow;
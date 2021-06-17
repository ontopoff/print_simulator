import React from "react";
import {useUrl} from "../url-context";

const Menu = () => {

    const {url, handleChangeUrl} = useUrl();

    return (
        <div className="menu height">
            <h2>Меню</h2>
            <input type="text" value={url} onChange={handleChangeUrl}/>
        </div>
    );
}

export default Menu;
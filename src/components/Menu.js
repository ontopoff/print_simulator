import React from "react";
import {useUrl} from "../url-context";

const Menu = () => {

    const {url, handleChangeUrl, loading} = useUrl();

    return (
        <>
            {loading ? (<div className="loading_outer"></div>) : <></>}
            <div className="menu height">
                <h2>Меню</h2>
                <input type="text" value={url} onChange={handleChangeUrl}/>
            </div>
        </>
    );
}

export default Menu;
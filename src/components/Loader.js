import React from "react";

const Loader = () => {

    return (
        <div className="loading_outer">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
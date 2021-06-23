import Menu from "./components/Menu";
import Simulator from "./components/Simulator";
import Instructions from "./components/Instructions";
import {ContentProvider} from "./context";
import React from "react";

function App() {

    return (
        <div className="app">
            <ContentProvider>
                <Instructions />
                <Menu />
                <Simulator />
            </ContentProvider>
        </div>
    );
}

export default App;

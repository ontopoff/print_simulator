import Menu from "./components/Menu";
import Simulator from "./components/Simulator";
import {ContentProvider} from "./context";
import React from "react";

function App() {

    return (
        <div className="app">
            <ContentProvider>
                <Menu />
                <Simulator />
            </ContentProvider>
        </div>
    );
}

export default App;

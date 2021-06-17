import './App.css';
import Menu from "./components/Menu";
import Simulator from "./components/Simulator";
import {UrlProvider} from "./url-context";

function App() {

    return (
        <div className="app">
            <UrlProvider>
                <Menu />
                <Simulator />
            </UrlProvider>
        </div>
    );
}

export default App;

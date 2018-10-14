import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    render() {
        return (
            <div className="farmstander">
            <div className="Menu">
            <Header />
            <Inventory />
            <Order /> 
            </div>
            </div>
        )
    }
}

export default App;
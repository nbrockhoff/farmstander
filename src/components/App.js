import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleItems from "../sample-items";
import Item from "./Item";

class App extends React.Component {
    state = {
        items: {},
        order: {}
    };
    addItem = item => {
        const items = { ...this.state.items };

        items[`item${Date.now()}`] = item;

        this.setState({
            items
        }); 
    
    };
    loadSampleItems = () => {
        this.setState({ items : sampleItems });
    };

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };
    render() {
        return (
            <div className="farmstander">
                <div className="menu">
                    <Header tagline="Heritage Farm"/>
                    <ul className="items">
                        {Object.keys(this.state.items).map(key => <Item key={key} index={key} details={this.state.items[key]} addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Order items={this.state.items} order={this.state.order} /> 
                <Inventory addItem={this.addItem} loadSampleItems={this.loadSampleItems} />
            </div>
        )
    }
}

export default App;
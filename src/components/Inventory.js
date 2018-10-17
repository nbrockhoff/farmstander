import React from 'react';
import AddItemForm from './addItemForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddItemForm addItem={this.props.addItem}/>
                <button onClick={this.props.loadSampleItems}>Add Sample Items</button>
            </div>
        );
    }
}

export default Inventory;
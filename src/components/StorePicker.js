import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    storeNameInput = React.createRef();

    goToStore = event => {

        event.preventDefault();
        
        const storeName = this.storeNameInput.current.value;
        
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
         
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Select a Farmstand</h2>
            <input type="text" ref={this.storeNameInput} required placeholder="Store Name" defaultValue={getFunName()} />
            <button type="submit">Visit Store</button>
        </form>
        );
    }
}

export default StorePicker;
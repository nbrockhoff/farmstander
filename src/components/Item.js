import React from "react";
import { formatPrice } from "../helpers";
class Item extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <li className="menu-item">
                <img src={image} alt={name} />
                <h3 className="item-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out'}</button>

            </li>
        );
    };
}

export default Item;
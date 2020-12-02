import React, {Component} from 'react';

import Order from "../../components/Order/Order";

class Orders extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Your Orders</h1>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;

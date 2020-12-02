import React, {Component} from 'react';

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    }

    componentDidMount() {
        axios.get(`/orders.json`)
            .then(res => {
                const fetchOrders = []
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchOrders})
            }).catch(err => {
                this.setState({loading: false})
        })
    }

    render() {
        let orders = null
        if (this.state.loading) {
            orders = <Spinner />
        }
        if (this.state.orders.length > 1) {
            orders = this.state.orders.map(order => (
                <Order key={order.id} ingredients={order.ingredients} price={order.price} />
            ))
        }
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Your Orders</h1>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);

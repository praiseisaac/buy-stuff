import React from 'react';
import MyButton from './../components/MyButton';
import {buyerService} from './services/buyerService';
import {buyerAuthService} from './services/buyerAuthService';
import FormInput from './../components/FormInput';
import {config} from './../config';
import ListItem from './../components/ListItem';
import Account from './Account';

const buttonsStyle = {
    width: "200px",
    paddingInline: "auto",
    borderRadius: "3px",
    margin: "5px"
}

const inputStyle = {
    height: "40px",
    borderRadius: "3px",
    border: "1px solid grey",
    paddingInline: "10px",
    marginBottom: "10px",
    fontSize: "medium"
}

const addressInput = {
    height: "40px",
    width: "500px",
    borderRadius: "3px",
    border: "1px solid grey",
    paddingInline: "10px",
    marginBottom: "10px",
    fontSize: "medium"
}

const status = {
    0: "ORDERED",
    1: "SHIPPED",
    2: "DELIVERED",
    3: "CANCELLED"
}

function Orders(props) {
    return (
        <div>
            <div style={{
                    display: "flex",
                    width: "100%"
                }}>
                <table style={{
                        width: "100%",
                        boxSpacing: "10px"
                    }}>
                    <tbody>
                        {
                            props.orders.map((order) => {
                                return <ListItem contentVal={[
                                        order._Id,
                                        order._date_created,
                                        order._items.length,
                                        order._total_cost,
                                        order._tracking_number,
                                        status[order._status],
                                        order._shipping_cost
                                    ]}></ListItem>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

class BuyerPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentBuyer: buyerAuthService.currentBuyerValue,
            orders: [],
            view: "account"
        };

        this.handleAccount = this.handleAccount.bind(this);
        this.handleOrders = this.handleOrders.bind(this);
        this.handlePayment = this.handlePayment.bind(this);
    }

    handleAccount() {
        this.setState({view: "account"});
    }

    handleOrders() {
        this.setState({view: "orders"});
        buyerService.getOrders(this.state.currentBuyer._Id).then(new_orders => this.setState({orders: new_orders}));

    }

    handlePayment() {}

    componentDidMount() {
        buyerService.getAll().then(new_buyers => this.setState({buyers: new_buyers}));
    }

    render() {
        const {currentBuyer, buyers} = this.state;
        var view = <div></div>

        if (this.state.view === "account") {
            view = <Account currentBuyer={this.state.currentBuyer} />
        } else if (this.state.view === "orders") {
            view = <Orders orders={this.state.orders} />
        }

        return (<div style={{
                width: "100%",
                display: "flex",
                margin: "30px"
            }}>
            <div>
                <MyButton style={buttonsStyle} onClick={this.handleAccount}>Account</MyButton>
                <MyButton style={buttonsStyle} onClick={this.handleOrders}>Orders</MyButton>
                <MyButton style={buttonsStyle} onClick={this.handlePayment}>Payment</MyButton>
            </div>
            {view}

        </div>);
    }
}
export default BuyerPage;

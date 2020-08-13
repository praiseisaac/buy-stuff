import React from 'react';
import './styles/Listing.css';
import avatar from './images/beach-sunset.jpg';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: "card", name: "item", price: 0, rating: 60, id: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    handleClick(e) {
        console.log("listing");
    }

    addToCart(e) {
        console.log("add to cart");
    }

    render() {
        return (
            <div id={this.props.id} className={"listing-card " + this.state.view} onClick={this.handleClick} >
                <div className="image-box">
                    <img src={this.props.src} style={{ height: "100%" }}></img>
                </div>
                <div className="info-box">
                    <div className="info-list">
                        <div className="item-name">
                            <span>
                                {this.state.name}
                            </span>
                        </div>
                        <div className="item-price">
                            <span>
                                {"$" + this.state.price}
                            </span>
                        </div>
                        <div className="rating" style={{ backgroundColor: "white" }}>
                            <div style={{ width: this.state.rating + 'px', backgroundColor: "blue", height: "100%", borderRadius: "10px" }}>

                            </div>
                        </div>
                    </div>
                    <div className="add-to-cart" onClick={(e) => {
                        e.stopPropagation();
                        this.addToCart();
                    }}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="10" fill="white" />
                            <path d="M9 15L12.1985 29.5M12.1985 29.5L16.5 49H47L51.5 29.5H12.1985ZM31 10V24.5M31 24.5L37.5 15M31 24.5L24 15" stroke="black" />
                        </svg>
                    </div>

                </div>
            </div>
        );
    }
}
export default Listing;
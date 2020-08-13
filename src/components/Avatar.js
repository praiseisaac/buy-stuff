import React from 'react';
import './styles/Avatar.css';
import avatar from './images/beach-sunset.jpg';

class Avatar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("hello");
    }

    render() {
        return (
            <div style={{ borderRadius: "20px", height: "40px", width: "40px", position: "absolute", right: "10px", overflow: "hidden" }}>
                <a href="#">
                    <img src={avatar} style={{maxHeight: "100%"}}>
                    </img>
                </a>
                
            </div>
        );
    }
}
export default Avatar;
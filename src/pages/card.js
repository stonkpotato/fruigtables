import React from "react";
import './card.css'
import MaskImg from "./maskedimage.js";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
        <div className="grow major">
            <div style={{
                padding: "20px",
                display: 'flex',
                width: "80%"
            }}>
                <MaskImg image={this.props.image} heightp={this.props.heightp}></MaskImg>
            </div>
            <div className='divi'></div>
            <div className="small">{this.props.percent} of {this.props.fruit} are wasted every year.</div>
        </div>
    );
  }
}

export default Card;


import React, {Component} from "react";

import './index.scss'


class Card extends Component{

    state = {
        active: false
    };

    likeApartment = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render() {
        const {active} = this.state;
        const {id, name, price, description, image} = this.props.itemData;
        return (
            <div className='card-item'>
                <div className='card-item_image'><img src={image} alt=""/></div>
                <div className='card-item_text __name'><p>{name}</p></div>
                <div className='card-item_text __description'><p>{description}</p></div>
                <div className='card-item_text __price'><p>{price} руб.</p></div>
                { active ?
                    <div className='card-item_like' onClick={(e)=>this.likeApartment()}><i className="fa fa-heart" aria-hidden="true"></i></div>
                    : <div className='card-item_like' onClick={(e)=>this.likeApartment()}><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                }
            </div>
        );
    }
}


export default Card;

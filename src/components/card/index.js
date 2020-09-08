import React, {Component} from "react";
import {connect} from 'react-redux';

import {
    addToFavourite,
    delFromFavourite
} from '../../actions'

import './index.scss'


class Card extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
        id: "",
        active: "false"
    };

    componentDidMount() {
        const {fav} = this.props.itemData;
        this.setState({
            active: fav
        })
    }



    likeApartment = (id) => {
        const {addToFavourite, delFromFavourite} = this.props;
        this.setState({
            id: id,
            active: !this.state.active
        });
        if (this.state.active){
            delFromFavourite(id)
        } else {
            addToFavourite(id)
        }
    };

    render() {
        console.log("render")
        const {active} = this.state;
        const {id, name, price, description, image} = this.props.itemData;


        return (
            <div className='card-item'>
                <div className='card-item_image'><img src={image} alt=""/></div>
                <div className='card-item_text __name'><p>{name}</p></div>
                <div className='card-item_text __description'><p>{description}</p></div>
                <div className='card-item_text __price'><p>{price} руб.</p></div>
                {active ?
                    <div className='card-item_like' onClick={(e) => this.likeApartment(id)}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    : <div className='card-item_like' onClick={(e) => this.likeApartment(id)}>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                }
            </div>
        );
    }
}



const mapDispatchToProps = {
    addToFavourite,
    delFromFavourite
};

export default connect(null, mapDispatchToProps)(Card);


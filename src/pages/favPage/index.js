import React, {Component} from "react";
import {connect} from 'react-redux'

import NavBar from '../../components/navbar'
import Card from "../../components/card";

import './index.scss'


class FavPage extends Component {

    formationArr = (jsonlist = []) => {
        const newArr = new Array();
        for (let key in jsonlist) {
            newArr.push(jsonlist[key])
        }
        return newArr
    };

    render() {
        const {favArr} = this.props;
        const datafavList = this.formationArr(favArr);

        return (
            <div>
                <NavBar/>
                <div className='main-page_card-list'>
                    {datafavList.map((item, key) => {
                        return (
                            <Card itemData={item} key={key}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state")
    console.log(state)
    const {favArr} = state.favPage;
    return {
        favArr
    };
};

export default connect(mapStateToProps)(FavPage);

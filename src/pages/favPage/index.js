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
        console.log("newArr")
        console.log(newArr)
        return newArr
    };

    render() {
        const {filteredList} = this.props;
        const dataFavList = this.formationArr(filteredList);

        return (
            <div>
                <NavBar/>
                <div className='main-page_card-list'>
                    {dataFavList.map((item, key) => {
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
    const {filteredList} = state.favPage;
    return {
        filteredList
    };
};

export default connect(mapStateToProps)(FavPage);

import React, {Component} from "react";
import {connect} from 'react-redux'

import NavBar from '../../components/navbar'
import Card from "../../components/card";
import {
    fetchData
} from "../../actions";

import './index.scss'


class MainPage extends Component {

    componentDidMount() {
        const {fetchData} = this.props;
        fetchData();

    }

    formationArr = (jsonlist = []) => {
        const newArr = new Array();
        for (let key in jsonlist) {
            newArr.push(jsonlist[key])
        }
        return newArr
    };

    render() {

        const {dataList, favArr} = this.props;
        let dataListArr;
        if (favArr.length !== 0){
            dataListArr = this.formationArr(favArr);
        } else {
            dataListArr = this.formationArr(dataList);
        }

        return (
            <div>
                <NavBar/>
                <div className='main-page_card-list'>
                    {dataListArr.map((item, key) => {
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
    const {dataList} = state.mainPage;
    const {favArr} = state.favPage;
    return {
        dataList,
        favArr
    };
};

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

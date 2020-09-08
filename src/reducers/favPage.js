import * as R from 'ramda'

import {
    ADD_TO_FAV,
    DEL_FROM_FAV,
    FILTERED_FAV
} from "../actonTypes";

const initialState = {
    favArr:[]
};


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_FAV: {
            const {getItems, id} = payload
            const item = getItems.find(item => item.id === id);
            item.fav = true;
            const key = R.findIndex(R.propEq('id', id))(getItems);
            getItems[key] = item;
            return {
                favArr: getItems
            }
        }
        case DEL_FROM_FAV:{
            const {id} = payload;
            const {favArr} = state;
            const item = favArr.find(item => item.id === id);
            item.fav = false;
            const key = R.findIndex(R.propEq('id', id))(favArr);
            favArr[key] = item;
            console.log(key);
            console.log(favArr);
            return {
                favArr: favArr
            }
        }
        case FILTERED_FAV:{
            const {favArr} = state;
            const newArr = favArr.filter(item => item.fav === true);
            return {
                ...state,
                filteredList: newArr
            }
        }
        default: {
            return state
        }
    }
}

import * as R from 'ramda'

import {
    ADD_TO_FAV,
    DEL_FROM_FAV
} from "../actonTypes";

const initialState = {
    favArr:[]
};


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_FAV: {

            const {favArr} = state;
            const newArr = [...favArr];
            newArr.push(payload);
            return {
                ...state,
                favArr: newArr
            }
        }
        case DEL_FROM_FAV:{
            const {id} = payload;
            const {favArr} = state;
            const deleteKey = R.findIndex(R.propEq('id', id))(favArr);
            const newArr = [...favArr];
            newArr.splice(deleteKey, 1);
            return {
                ...state,
                favArr: newArr
            }
        }
        default: {
            return state
        }
    }
}

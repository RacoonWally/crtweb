import {
    FETCH_DATA,
    ADD_TO_FAV,
    DEL_FROM_FAV
} from "../actonTypes";
import {
    getList
} from "../service";


export const fetchData = () => dispatch => {

    const getItems = getList();
    dispatch({
        type: FETCH_DATA,
        payload: getItems
    })
};

export const addToFavourite = (id) => dispatch => {

    const getItems = getList();
    const item = getItems.find(item => item.id === id);
    dispatch({
        type: ADD_TO_FAV,
        payload: item
    })
};

export const delFromFavourite = (id) => dispatch => {
    // const newArr = arr.splice(arr.indexOf(id), 1);
    dispatch({
        type: DEL_FROM_FAV,
        payload: {id}
    })
};



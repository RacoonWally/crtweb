import {
    FETCH_DATA
} from '../actonTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_DATA:{
            return {
                dataList: payload
            }
        }
        default: return state;
    }
}

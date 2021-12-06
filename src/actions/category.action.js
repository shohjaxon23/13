import axios from '../helpers/axios';
import { categoryConstants } from './constants';

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({type: categoryConstants.GET_ALL_CATEGORIES_REQUEST})
        const res = await axios.get(`category/getcategory`);
        console.log(res);
        if(res.status === 200){

            const { categoryList } = res.data;

            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categoryList: categoryList }
            })
        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error : res.data.error}
            })
        }
    }
}
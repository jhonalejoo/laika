import {combineReducers} from "redux";
import category from './category/reducer';
import subcategory from './subcategory/reducer';
import product from './product/reducer';

const IndexReducer = combineReducers({
    category,
    subcategory,
    product
});

export default IndexReducer

import  {
   FOCUS_PRODUCT,
    ADD_QUANTITY,REDUCE_QUANTITY
} from './constants';


export const focusProduct = (product) => ({
   type : FOCUS_PRODUCT,
   product
});

export const addQuantity = () =>({
  type : ADD_QUANTITY
});

export const reduceQuantity = () =>({
   type : REDUCE_QUANTITY
});

import {FOCUS_CATEGORY, GET_CATEGORIES} from './constants';

const initialState = {

   categories: [
       {
           name: 'Alimentos',
           image : require('../../Assets/svg/alimentos.png')
       },
       {
           name: 'Snacks',
           image : require('../../Assets/svg/snacks.png')
       },
       {
           name: 'Medicinas',
           image : require('../../Assets/svg/medicinas.png')
       },
       {
           name: 'Higiene',
           image : require('../../Assets/svg/higiene.png')
       },
       {
           name: 'Accesorios',
           image : require('../../Assets/svg/accesorios.png')
       }
   ],
    categoryFocus: 'Alimentos'
};


const reducer = (state = initialState, action) => {
 switch (action.type) {
     case GET_CATEGORIES :
         let filterCategories = state.categories.filter((category,index) => index < 3);
         return {
             ...state,
             categories : filterCategories
         };
     case FOCUS_CATEGORY :
         return {
             ...state,
             categoryFocus: action.category,
         };
     default :
         return {
             ...state
         }
 }
};

export default  reducer;

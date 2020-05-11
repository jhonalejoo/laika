import {FOCUS_PRODUCT,ADD_QUANTITY,REDUCE_QUANTITY} from './constants';

const initialState = {

   products: [
       {
           name: 'ChunKy Pollo Adultos',
           image : require('../../Assets/images/Enmascarar_grupo_34.png'),
           member : false,
           discount: require('../../Assets/svg/Componente_45.png'),
           beforePrice: 50000,
           price : 4000
       },
       {
           name: 'ChunKy Cordero, Arroz y Salmon Cachorro',
           image : require('../../Assets/images/Enmascarar_grupo_34.png'),
           member : false,
           discount: require('../../Assets/svg/Componente_45.png'),
           beforePrice: 50000,
           price : 4000
       },
       {
           name: 'ChunKy Pollo Adultos Mayores',
           image : require('../../Assets/images/Enmascarargrupo.png'),
           member : false,
           discount: require('../../Assets/svg/Grupo_5840.png'),
           beforePrice: 50000,
           price : 4000
       },
       {
           name: 'ChunKy Cordero, Arroz y Salmon Adulto',
           image : require('../../Assets/images/Imagen8.png'),
           member : false,
           discount: require('../../Assets/svg/Grupo_5840.png'),
           beforePrice: 50000,
           price : 4000
       },
       {
           name: 'ChunKy Pollo Adultos',
           image : require('../../Assets/images/Imagen9.png'),
           member : true,
           discount: require('../../Assets/svg/Componente_45.png'),
           beforePrice: 50000,
           price : 4000
       },
       {
           name: 'ChunKy Cordero, Arroz y Salmon Cachorro',
           image : require('../../Assets/images/Enmascarar_grupo_34.png'),
           member : false,
           discount: require('../../Assets/svg/Grupo_5840.png'),
           beforePrice: 50000,
           price : 4000
       }
   ],
    productFocus: '',
    quantity : 0
};


const reducer = (state = initialState, action) => {
 switch (action.type) {
     case FOCUS_PRODUCT :
         return {
             ...state,
             productFocus: action.product,
         };
     case ADD_QUANTITY:
         return {
             ...state,
             quantity : state.quantity + 1
         };
     case REDUCE_QUANTITY:
         return {
             ...state,
             quantity : state.quantity - 1
         };
     default :
         return {
             ...state
         }
 }
};

export default  reducer;

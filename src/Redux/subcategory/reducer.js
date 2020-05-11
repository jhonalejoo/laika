import {
    FOCUS_SUB_CATEGORY,
    GET_SUB_CATEGORIES
} from './constants';

const initialState = {

   subcategories: [
       {
           name: 'Medicina Prepagada',
           category: 'Medicinas',
           image : require('../../Assets/images/medicina_prepaga.png')
       },
       {
           name: 'Antiparásitos',
           category: 'Medicinas',
           image : require('../../Assets/images/antiparasitos.png')
       },
       {
           name: 'Antipulgas',
           category: 'Medicinas',
           image : require('../../Assets/images/antipulgas.png')
       },
       {
           name: 'Medicamentos y suplementos',
           category: 'Medicinas',
           image : require('../../Assets/images/medicamento.png')
       },
       {
           name: 'Concentrados',
           category: 'Alimentos',
           image : require('../../Assets/images/Concentrado33.png')
       },
       {
           name: 'Naturales',
           category: 'Alimentos',
           image : require('../../Assets/images/naturales.png')
       },
       {
           name: 'Humedos',
           category: 'Alimentos',
           image : require('../../Assets/images/humedos.png')
       },
       {
           name: 'Naturales',
           category: 'Snacks',
           image : require('../../Assets/images/DONA.png')
       },
       {
           name: 'Celebración',
           category: 'Snacks',
           image : require('../../Assets/images/CELEBRACION.png')
       },
       {
           name: 'Carnazas y huesos',
           category: 'Snacks',
           image : require('../../Assets/images/FOTO.png')
       },
       {
           name: 'Galletas',
           category: 'Snacks',
           image : require('../../Assets/images/galleta.png')
       },
       {
           name: 'Naturales',
           category: 'Snacks',
           image : require('../../Assets/images/gomas.png')
       },
       {
           name: 'Brownies Y otros',
           category: 'Snacks',
           image : require('../../Assets/images/g2g-brownies.png')
       },
       {
           name: 'Esencias florales',
           category: 'Higiene',
           image : require('../../Assets/images/frame.png')
       },
       {
           name: 'Producto de aseo',
           category: 'Higiene',
           image : require('../../Assets/images/kisspng.png')
       },
       {
           name: 'Camas/casas',
           category: 'Accesorios',
           image : require('../../Assets/images/cama.png')
       },
       {
           name: 'Collares',
           category: 'Accesorios',
           image : require('../../Assets/images/perro-usando-collar.png')
       },
       {
           name: 'Cepillos',
           category: 'Accesorios',
           image : require('../../Assets/images/perro1.png')
       },
       {
           name: 'Juguetes y otros',
           category: 'Accesorios',
           image : require('../../Assets/images/pelota.png')
       },
       {
           name: 'Comedores/bebedores',
           category: 'Accesorios',
           image : require('../../Assets/images/plato.png')
       },
       {
           name: 'Ropa',
           category: 'Accesorios',
           image : require('../../Assets/images/ropa.png')
       },
       {
           name: 'Bozales y otros',
           category: 'Accesorios',
           image : require('../../Assets/images/4047974176160_00_640x640.png')
       }
   ],
    subcategoriesFilter: [],
    subCategoryFocus: 'Medicinas'
};


const reducer = (state = initialState, action) => {
 switch (action.type) {
     case GET_SUB_CATEGORIES :
         let filterSubCategory = state.subcategories.filter((subcategory) => subcategory.category === action.category);
         return {
             ...state,
             subcategoriesFilter : filterSubCategory
         };
     case FOCUS_SUB_CATEGORY :
         return {
             ...state,
             subcategories: action.subcategory,
         };
     default :
         return {
             ...state
         }
 }
};

export default  reducer;

import  {
   GET_SUB_CATEGORIES,
    FOCUS_SUB_CATEGORY
} from './constants';

export const getSubCategories = (category) => ({
   type : GET_SUB_CATEGORIES,
    category
});
export const focusSubCategory = (subcategory) => ({
   type : FOCUS_SUB_CATEGORY,
   subcategory
});

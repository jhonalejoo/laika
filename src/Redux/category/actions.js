import  {
   GET_CATEGORIES,
   FOCUS_CATEGORY
} from './constants';

export const getCategories = () => ({
   type : GET_CATEGORIES
});
export const focusCategory = (category) => ({
   type : FOCUS_CATEGORY,
   category
});

import {View} from 'react-native';
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import HeaderComponent from '../../Components/Header';
import ButtonCall from '../../Components/buttons/buttonCall';
import ButtonSubCategory from '../../Components/buttons/buttonSubCategory';
import ButtonCategory from '../../Components/buttons/buttonCategory';
import {getCategories,focusCategory} from '../../Redux/category/actions';
import {getSubCategories} from '../../Redux/subcategory/actions';


const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const stateCategory = useSelector(state => state.category);
    const stateSubCategory = useSelector(state => state.subcategory);
    const {subcategoriesFilter} = stateSubCategory;
    const {categories,categoryFocus} = stateCategory;

    const handleFocusCategory  = (category) =>{
        dispatch(focusCategory(category));
        dispatch(getSubCategories(category));
    };

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories('Alimentos'));
    }, []);


    return (
        <View style={{ flex: 1}}>
            <HeaderComponent navigation={navigation}/>
            <ButtonCall/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {
                    categories.map((category,index)=>(
                        <ButtonCategory
                            handleFocusCategory={handleFocusCategory}
                            focusCategory={categoryFocus}
                            category={category}
                            index={index}/>
                    ))
                }
            </View>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'}}>
                {
                    subcategoriesFilter && subcategoriesFilter.map((subcategory,index) =>(
                        <ButtonSubCategory
                            subcategory={subcategory}
                            navigation={navigation}
                            index={index}
                        />
                    ))
                }
            </View>

        </View>
    );
};
export default  Home;

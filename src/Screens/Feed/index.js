import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import {View, FlatList,TouchableOpacity,Text} from 'react-native';
import HeaderComponent from '../../Components/Header';
import CardProduct from '../../Components/Card/cardProduct';
import {Button,Divider} from 'react-native-elements';

function keyExtractor(item, index) {
    return item + index;
}

const Feed = ({navigation}) => {

    const stateProduct = useSelector(state => state.product);
    const {products} = stateProduct;


    const  renderItem= ({item}) =>{
        return (<CardProduct navigation={navigation} product={item}/>)
    };

    return (
        <View>
            <HeaderComponent navigation={navigation}/>
            <FlatList data={products}
                      renderItem={renderItem}
                      keyExtractor={keyExtractor}
                      style={{height:'80%'}}
                      showsVerticalScrollIndicator={false}/>
                      
        </View>
    );
};

export default  Feed;

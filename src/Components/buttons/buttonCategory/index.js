import React from 'react';
import {View,Image,TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {focusCategory} from '../../../Redux/category/actions';

const ButtonCategory = (props) =>{
    const {handleFocusCategory,focusCategory, category}=props;
    return (
        <TouchableOpacity
            style={focusCategory === category.name ? [styles.containerButton,{borderWidth: 1}]: styles.containerButton}
            onPress={() => handleFocusCategory(category.name)}
        >
            <View style={{flexDirection:'row'}}>
                <Image
                    source={category.image}
                    style={styles.imageStyles}
                    resizeMode={'contain'}
                />
                <Text style={styles.textStyles}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ButtonCategory;

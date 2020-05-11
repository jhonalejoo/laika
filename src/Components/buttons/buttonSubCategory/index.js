import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {Image} from 'react-native-elements';
import styles from './styles';

const ButtonSubCategory = props =>{
    const {subcategory,navigation}=props;
    return (
            <TouchableOpacity style={styles.containerButton} onPress={()=> navigation.navigate('Feed')}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.textStyles}>{subcategory.name}</Text>
                    <Image
                        containerStyle={{width: '30%',alignSelf: 'flex-end',}}
                        source={subcategory.image}
                        style={styles.imageStyles}
                        resizeMode={'contain'}
                    />
                </View>
            </TouchableOpacity>
        )
};

export default ButtonSubCategory;

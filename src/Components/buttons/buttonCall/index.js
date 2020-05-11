import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {Image} from 'react-native-elements';
import styles from './styles';

const ButtonCall = props =>{
    return (
        <TouchableOpacity
            style={styles.containerButton}
        >
            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('../../../Assets/svg/girl-callcenter-1.png')}
                    style={styles.imageStyles}
                    resizeMode={'contain'}
                />
                <Text style={[styles.textStyles,{fontWeight: 'bold'}]}>Asesoría</Text>
                <Text style={styles.textStyles}>veterinaria gratis.</Text>
                <Text style={[styles.textStyles,{fontWeight: 'bold'}]}>!Llamanos aqui!</Text>
                <Image
                    containerStyle={{width: '12%'}}
                    source={require('../../../Assets/svg/_Phone_.png')}
                    resizeMode={'cover'}
                />
            </View>
        </TouchableOpacity>
    )
};

export default ButtonCall;

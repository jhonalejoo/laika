import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import {View,Image,TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import Theme from '../../Theme/Theme';


const HeaderComponent= props => {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.contentHeader}>
                <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <Image
                    source={require('../../Assets/svg/Trazado_844.png')}
                    style={{height: 20, marginTop:10,marginLeft: 10}}
                    resizeMode={'contain'}
                />
                </TouchableOpacity>
                <Image
                    source={require('../../Assets/svg/Trazado_358.png')}
                    style={{height: 22,marginLeft:50}}
                    resizeMode={'contain'}
                />
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: Theme.COLORS.WHITE}}>Bogotá</Text>
                    <Image
                        source={require('../../Assets/svg/chevron-right.png')}
                        style={{height: 15,marginTop:4,marginRight:10}}
                        resizeMode={'contain'}
                    />
                <Image
                    source={require('../../Assets/svg/shopping-cart2.png')}
                    style={{height: 22}}
                    resizeMode={'contain'}
                />
                </View>
            </View>
            <SearchBar
                round
                containerStyle={styles.containerSearch}
                placeholderTextColor={Theme.COLORS.PRIMARY}
                inputContainerStyle={styles.contentSearch}
                inputStyle={styles.inputStyle}
                cancelIcon={{color:Theme.COLORS.PRIMARY,size: 25}}
                searchIcon={{color:Theme.COLORS.PRIMARY,size: 25}}
                placeholder="Buscar producto"
            />
    </View>
    );
};

export default HeaderComponent;

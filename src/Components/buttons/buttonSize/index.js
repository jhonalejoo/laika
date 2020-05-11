import React from 'react';
import {Button} from 'react-native-elements';
import styles from './styles';
import Theme from '../../../Theme/Theme';

const ButtonSize = props =>{
    const {size,kilo,focusKilo,setFocusKilo}=props;
    return (
        <Button
            onPress={() => setFocusKilo(kilo)}
            buttonStyle={focusKilo === kilo ? {borderWidth:0,backgroundColor:Theme.COLORS.PRIMARY,marginRight: 2}: {borderColor: Theme.COLORS.PRIMARY,marginRight: 2}}
            titleStyle={focusKilo === kilo ? {color: Theme.COLORS.WHITE,fontSize: size}:{color: Theme.COLORS.PRIMARY,fontSize: size}}
            title={kilo}
            type="outline"/>
    )
};

export default ButtonSize;

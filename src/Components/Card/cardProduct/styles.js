import Theme from '../../../Theme/Theme';
import {Dimensions, Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerStyles :{
        backgroundColor: Theme.COLORS.WHITE,
        marginTop:15,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 5,
        padding:10
   },
    imageStyles :{
        height: 100,
        width:80,
    },
    textStyles:{
    color: Theme.COLORS.PRIMARY,
        fontWeight: 'bold',
        fontSize: 12,
},
    buttonQuantityStyles:{
        backgroundColor: Theme.COLORS.WHITE,
        borderWidth:0.5,
        borderRadius:12,
        padding:0,
        borderColor:Theme.COLORS.PRIMARY
    }

});

export default styles;

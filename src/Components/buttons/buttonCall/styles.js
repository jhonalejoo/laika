import Theme from '../../../Theme/Theme';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerButton :{
        padding: 9,
        marginVertical: 5,
        marginHorizontal:15,
        borderRadius: 5,
        backgroundColor:Theme.COLORS.BLUE,
    },
    textStyles:{
        color: Theme.COLORS.PRIMARY,
        marginLeft:5,
        fontSize: 12.5,
        alignSelf: 'center'
    },
    imageStyles :{
        height: 25,
        width:25,
        borderBottomRightRadius:5,
        marginRight: 5
    }
});

export default styles;

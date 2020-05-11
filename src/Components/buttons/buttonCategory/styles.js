import Theme from '../../../Theme/Theme';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerButton :{
        padding: 9,
        justifyContent: 'space-between',
        marginVertical: 5,
        borderRadius: 5,
        width: '29%',
        backgroundColor:Theme.COLORS.WHITE,
        borderColor: Theme.COLORS.PRIMARY,
    },
    textStyles:{
        color: Theme.COLORS.PRIMARY,
        marginLeft:10,
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center'
    },
    imageStyles :{
        height: 17,
        width:25,
        borderBottomRightRadius:5
    }
});

export default styles;

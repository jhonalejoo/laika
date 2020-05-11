import Theme from '../../Theme/Theme';
import {Dimensions, Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor: Theme.COLORS.PRIMARY
    },
    containerSearch: {
        marginVertical: 2,
        backgroundColor: Theme.COLORS.PRIMARY,
        borderTopColor: Theme.COLORS.PRIMARY,
        borderBottomColor: Theme.COLORS.PRIMARY,
        borderColor: Theme.COLORS.PRIMARY
    },
    contentSearch: {
        backgroundColor: Theme.COLORS.WHITE,
    },
    inputStyle:{
        fontSize: 18,
        color: Theme.COLORS.PRIMARY,
},
    contentHeader: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    contentImage :{
        flexDirection: 'row',
    }
});

export default styles;

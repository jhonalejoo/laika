import Theme from '../../../Theme/Theme';
import {Dimensions, Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  containerButton :{
      width:"44%",
      margin: 10,
      borderRadius: 5,
      backgroundColor:'white'
  },
  textStyles:{
      color: Theme.COLORS.PRIMARY,
      marginLeft:10,
      fontWeight: 'bold',
      width: '65%',
      fontSize:16,
      alignSelf: 'center'
  },
  imageStyles :{
      width: 60,
      height: 70,
      borderBottomRightRadius:5
  }
});

export default styles;

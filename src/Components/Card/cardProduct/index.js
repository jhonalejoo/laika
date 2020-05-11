import React,{useState} from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import {useDispatch,useSelector} from "react-redux";
import styles from './styles';
import ButtonSize from '../../buttons/buttonSize';
import {Button,Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../../../Theme/Theme';
import {addQuantity,reduceQuantity,focusProduct} from '../../../Redux/product/actions';

const kilos = [{kilo: '2Kg'},{kilo: '4Kg'},{kilo: '5Kg'},{kilo: '9Kg'}];

const CardProduct = props =>{
    const {product,navigation} = props;
    const dispatch = useDispatch();
    const stateProduct = useSelector(state => state.product);
    const {quantity} = stateProduct;
    const [focusKilo,setFocusKilo] = useState('');

    return (
            <View style={styles.containerStyles}>
                {product.member &&
                <Image
                    source={require('../../../Assets/svg/Grupo_5841.png')}
                    style={{position: 'absolute',width: 40,height: 40}}
                    resizeMode={'contain'}
                />
                }
                <TouchableOpacity onPress={()=> navigation.navigate('Product')}>
                    <Image
                        source={product.image}
                        style={styles.imageStyles}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
             <View style={{justifyContent: 'space-around',width: '37%'}}>
                 <Text style={styles.textStyles}>{product.name}</Text>
                 <View style={{flexDirection:'row',marginTop: 5}}>
                     {
                         kilos.map((kilo,index)=>(
                             <ButtonSize
                                 setFocusKilo={setFocusKilo}
                                 focusKilo={focusKilo}
                                 kilo={kilo.kilo}
                                 index={index}
                                 size={8}
                             />
                         ))
                     }
                 </View>
                 {
                     quantity > 0 ?
                         <View style={{flexDirection: 'row',justifyContent:'space-between',marginTop:5}}>
                             <Button
                                 buttonStyle={styles.buttonQuantityStyles}
                                 containerStyle={{height: 28,width:28,padding:0}}
                                 title={'-'}
                                 onPress={()=>dispatch(reduceQuantity())}
                                 titleStyle={{color: Theme.COLORS.PRIMARY,fontSize:15,padding:0}}
                             />
                             <Text style={{color: Theme.COLORS.PRIMARY}}>{quantity}</Text>
                             <Button
                                 onPress={()=> dispatch(addQuantity())}
                                 buttonStyle={styles.buttonQuantityStyles}
                                 containerStyle={{height: 28,width:28,padding:0}}
                                 title={'+'}
                                 titleStyle={{color: Theme.COLORS.PRIMARY,fontSize:15,padding:0}}
                             />
                         </View>
                         :
                         <Button
                             title={'Agregar'}
                             onPress={()=>dispatch(addQuantity())}
                             icon={
                                 <Icon
                                     name="shopping-cart"
                                     size={15}
                                     color={Theme.COLORS.PRIMARY}
                                 />
                             }
                             buttonStyle={{marginTop:5,padding:2,borderWidth:0,backgroundColor:Theme.COLORS.GRAY}}
                             titleStyle={{fontSize: 12,marginLeft:15,color: Theme.COLORS.PRIMARY}}
                             type="outline"
                         />
                 }


             </View>
                <View style={{marginLeft: 25}}>
                    <Rating imageSize={12}   style={{marginLeft: 0}} startingValue={'3'} />
                    <Text style={{fontSize: 20,fontWeight: 'bold',color: Theme.COLORS.PRIMARY,marginTop:10}}>${product.price}</Text>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 9,fontWeight: 'bold',color: Theme.COLORS.PRIMARY}}>Antes</Text>
                        <Text style={{fontSize: 12,fontWeight: 'bold',textDecorationLine: 'line-through',color: Theme.COLORS.YELLOW}}>${product.beforePrice}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 9,fontWeight: 'bold'}}>Cantidad: </Text>
                            <Text style={{fontSize: 9,color:Theme.COLORS.GREEN}}>Disponible</Text>
                        </View>
                    </View>
                </View>
                <Image
                    source={product.discount}
                    style={{position: 'absolute',bottom:0,top: -14, right: -8,width: 45,height:35}}
                    resizeMode={'contain'}
                />
            </View>
    )
};

export default CardProduct;

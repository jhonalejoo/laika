import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Theme from '../../Theme/Theme';
import {Button, Rating} from 'react-native-elements';
import ButtonSize from '../../Components/buttons/buttonSize';

const {height} = Dimensions.get('window');
const kilos = [{kilo: '1Kg'},{kilo: '2Kg'},{kilo: '4Kg'},{kilo: '5Kg'},{kilo: '9Kg'}];


const Product = props => {

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    const [focusKilo,setFocusKilo] = useState('');


    const _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        setSize({
            width: layout.width,
            height: layout.height + 40,
        });
    };

    return (
        <View>
        <View style={{height: height * .4, width: '100%'}} onLayout={_onLayoutDidChange}>
            <Carousel
                autoplay={false}
                style={size}
                bullets
                chosenBulletStyle={{backgroundColor: Theme.COLORS.PRIMARY}}
                bulletStyle={{borderColor: Theme.COLORS.PRIMARY}}
                arrows
                leftArrowText={'＜'}
                leftArrowStyle={{color: Theme.COLORS.PRIMARY, fontWeight: 'bold', fontSize: 20, margin: 20}}
                rightArrowText={'＞'}
                rightArrowStyle={{color: Theme.COLORS.PRIMARY, fontWeight: 'bold', fontSize: 20, margin: 20}}
                isLooped={false}
            >
                <View style={size}>
                    <Image
                        source={require('../../Assets/images/Enmascarar_grupo_34.png')}
                        style={{width: '90%', height: '90%', alignSelf: 'center'}}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={size}>
                    <Image
                        source={require('../../Assets/images/Enmascarar_grupo_34.png')}
                        style={{width: '90%', height: '90%', alignSelf: 'center'}}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={size}>
                    <Image
                        source={require('../../Assets/images/Enmascarar_grupo_34.png')}
                        style={{width: '90%', height: '90%', alignSelf: 'center'}}
                        resizeMode={'contain'}
                    />
                </View>
            </Carousel>

        </View>

            <View style={{
                backgroundColor: Theme.COLORS.WHITE,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderTopStartRadius: 8,
            }}>
                <Text style={{color: Theme.COLORS.PRIMARY, fontSize: 22, fontWeight: 'bold'}}>Chunky Pollos
                    Adulto</Text>
                <Rating imageSize={20} style={{alignSelf: 'flex-start'}} startingValue={'3'}/>
            </View>

            <View style={{marginHorizontal: 15,justifyContent:'center'} }>

                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    {
                        kilos.map((kilo,index)=>(
                            <ButtonSize
                                setFocusKilo={setFocusKilo}
                                focusKilo={focusKilo}
                                kilo={kilo.kilo}
                                index={index}
                                size={15}
                            />
                        ))
                    }
                    <View style={{marginLeft:15}}>
                        <Text style={{fontSize: 25,fontWeight: 'bold',color: Theme.COLORS.PRIMARY}}>$5,625</Text>
                        <Text style={{fontSize: 9,fontWeight: 'bold',color: Theme.COLORS.PRIMARY}}>Antes</Text>
                        <Text style={{fontSize: 15,fontWeight: 'bold',textDecorationLine: 'line-through',color: Theme.COLORS.YELLOW}}>$4500</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 9,fontWeight: 'bold'}}>Cantidad: </Text>
                            <Text style={{fontSize: 9,color:Theme.COLORS.GREEN}}>Disponible</Text>
                        </View>
                    </View>

                </View>
                <Button
                    title={'Agregar al carrito'}
                    buttonStyle={{backgroundColor: Theme.COLORS.PRIMARY, paddingVertical: 10}}
                />
                <Button
                    title={'Informacion Nutricional'}
                    titleStyle={{color: Theme.COLORS.PRIMARY}}
                    buttonStyle={{paddingVertical: 10, borderWidth: 0}}
                    type="outline"
                />
            </View>

        </View>
    );
};

export default Product;

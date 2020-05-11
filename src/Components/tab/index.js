import * as React from 'react';
import {Image} from 'react-native';
import Home from '../../Screens/Home';
import Product from '../../Screens/Product';
import Promotion from '../../Screens/Promotion';
import Contact from '../../Screens/Contact';
import Account from '../../Screens/Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const TabComponent = () =>{
    return (
        <Tab.Navigator
            tabBarOptions={{
                style:{height: '12%',borderTopStartRadius: 20,borderTopRightRadius: 20},
                showLabel: false,
            }}
        >

            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../../Assets/svg/Grupo_5693.png')}
                                style={{height: 40, width: 35}}
                            />
                        );
                    },
                }}
                name="Home"
                component={Home}

            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../../Assets/svg/Grupo_5694.png')}
                                style={{height: 40, width: 62}}
                                resizeMode={'contain'}
                            />
                        );
                    },
                }}
                name="Reorder"
                component={Product}/>
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../../Assets/svg/Grupo_5695.png')}
                                style={{height: 40, width: 62}}
                                resizeMode={'contain'}
                            />
                        );
                    },
                }}
                name="Promotion"
                component={Promotion}/>
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../../Assets/svg/Grupo_5696.png')}
                                style={{height: 40, width: 62}}
                                resizeMode={'contain'}
                            />
                        );
                    },
                }}
                name="Contact"
                component={Contact}/>
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../../Assets/svg/Grupo_5697.png')}
                                style={{height: 40, width: 62}}
                                resizeMode={'contain'}
                            />
                        );
                    },
                }}
                name="Account"
                component={Account}/>
        </Tab.Navigator>
    )
};

export  default TabComponent;

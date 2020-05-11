import { createStackNavigator } from '@react-navigation/stack';
import TabComponent from '../Components/tab';
import Feed from '../Screens/Feed';
import Product from '../Screens/Product';
import React from 'react';
const Stack = createStackNavigator();

const Navigation = () =>{
    return (
            <Stack.Navigator initialRouteName="TabComponent">
                <Stack.Screen
                    name="Tab"
                    options={
                        {
                            headerShown: false
                        }
                    }
                    component={TabComponent} />
                 <Stack.Screen
                     name="Feed"
                     options={
                         {
                             headerShown: false
                         }
                     }
                     component={Feed}
                 />
                <Stack.Screen
                    name="Product"
                    options={
                        {
                            headerShown: false
                        }
                    }
                    component={Product}
                />
            </Stack.Navigator>
    );
};

export default  Navigation;

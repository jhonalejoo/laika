import * as React from 'react';
import {SafeAreaView, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Theme from './src/Theme/Theme';
import {Provider} from 'react-redux';
import IndexReducer from './src/Redux/index-reducer';
import {createStore, compose} from 'redux';
const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import Navigation from './src/Navigator';

const store = createStore(
    IndexReducer,
    composeSetup()
);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <StatusBar backgroundColor={Theme.COLORS.PRIMARY}/>
                <NavigationContainer>
                    <Navigation/>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}

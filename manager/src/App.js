import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCR8S4T3W_rtTapjyUiMesfABk3CL8j_ng',
            authDomain: 'manager-cbe35.firebaseapp.com',
            databaseURL: 'https://manager-cbe35.firebaseio.com',
            projectId: 'manager-cbe35',
            storageBucket: 'manager-cbe35.appspot.com',
            messagingSenderId: '221925160019',
            appId: '1:221925160019:web:9df47936a51d1084'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;

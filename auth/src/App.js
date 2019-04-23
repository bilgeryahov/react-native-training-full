import firebase from 'firebase';

import React, { Component } from 'react';

import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDsDM9viPOv8jtx92UeX57XeFS2FmTxlqc',
            authDomain: 'react-native-training-au-b48c9.firebaseapp.com',
            databaseURL: 'https://react-native-training-au-b48c9.firebaseio.com',
            projectId: 'react-native-training-au-b48c9',
            storageBucket: 'react-native-training-au-b48c9.appspot.com',
            messagingSenderId: '1024523537089'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;

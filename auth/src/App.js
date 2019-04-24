import firebase from 'firebase';

import React, { Component } from 'react';

import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDsDM9viPOv8jtx92UeX57XeFS2FmTxlqc',
            authDomain: 'react-native-training-au-b48c9.firebaseapp.com',
            databaseURL: 'https://react-native-training-au-b48c9.firebaseio.com',
            projectId: 'react-native-training-au-b48c9',
            storageBucket: 'react-native-training-au-b48c9.appspot.com',
            messagingSenderId: '1024523537089'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    conditionalRender() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                    </Button>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <Spinner size="large" />
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.conditionalRender()}
            </View>
        );
    }
}

export default App;

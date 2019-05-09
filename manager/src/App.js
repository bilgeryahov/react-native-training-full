import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;

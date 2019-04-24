import firebase from 'firebase';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed!',
            loading: false
        });
    }

    conditionalRender() {
        if (this.state.loading) {
            return (<Spinner size="small" />);
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        const { errorTextStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.conditionalRender()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

import React, { Component } from 'react';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
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
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;

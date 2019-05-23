import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value }));
    }

    onButtonPress() {
        const { name, shift, phone } = this.props;
        this.props.employeeSave({ name, shift, phone, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, shift, phone } = state.employeeForm;
    return { name, shift, phone };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);

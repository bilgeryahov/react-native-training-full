import React from 'react';
import {
    Scene,
    Router,
    Actions
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene key="auth" hideNavBar>
                <Scene
                    hideNavBar={false}
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    initial
                />
            </Scene>
            <Scene key="main" hideNavBar>
                <Scene
                    initial
                    hideNavBar={false}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                />
                <Scene
                    hideNavBar={false}
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;

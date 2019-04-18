import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

const App = () => (<Header headerText={'Albums!'} />);

AppRegistry.registerComponent('albums', () => App);

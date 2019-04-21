import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={styles.viewContainerStyle}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

const styles = {
    viewContainerStyle: {
        flex: 1
    }
};

AppRegistry.registerComponent('albums', () => App);

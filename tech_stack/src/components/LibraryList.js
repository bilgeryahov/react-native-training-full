import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return (
            <View>
                <Text onPress={() => console.log(this.props)}>
                    Hi!
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);

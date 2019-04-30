import { Component } from 'react';

import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);

import React from 'react';
import { connect } from 'react-redux';
import { okay } from '../actions';

class Buttons extends React.Component {
    render() {
        return (
                <button type="button"
                        onClick={ this.props.onConfirm }>
                    확인
                </button>

        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: () => dispatch(okay())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
